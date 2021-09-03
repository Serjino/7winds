import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import styles from "./app.css";

interface IValidityRules {
    [key: string]: {
        regexp: RegExp,
        notice?: string,
        isChecked?: boolean,
    }
}

const validityRules: IValidityRules = {
    name: {
        regexp: /^[A-Za-zА-Яа-яёЁ]+$/i,
        notice: 'Только русские/английские буквы, без пробелов',
    },
    email: {
        regexp: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/,
        notice: 'Введите email в формате xxxx@xxxx.xx',
    },
    tel: {
        regexp: /^[0-9]{11}$/,
        notice: 'Введите телефон в формате 89991234567',
    },
    date: {
        regexp: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/,
        notice: 'Введите дату в формате ДД.ММ.ГГГГ',
    },
    checkbox: {
        regexp: /[]/,
        notice: 'Вы должны согласиться на обработку персональных данных',
    },
}

function submitForm(e: React.FormEvent<HTMLFormElement>) {

    let form = (e.target as HTMLFormElement);
    let notices = form.getElementsByTagName('span');
    let inputs = form.getElementsByTagName('input');
    let checkboxInput;
    let checkboxNotice;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "checkbox") {
            checkboxInput = inputs[i];
            let checkboxLabel = checkboxInput.closest('label');
            checkboxNotice = checkboxLabel?.getElementsByTagName('span')[0];
        }
    }

    for (let i = 0; i < notices.length; i++) {
        if (notices[i].textContent !== "" || inputs[i].value == "" || !checkboxInput?.checked) {
            e.preventDefault();
            if (inputs[i].value == "") {
                notices[i].textContent = "Заполните пустое поле"
            }
            if (!checkboxInput?.checked) {
                if (checkboxNotice != undefined) {
                    checkboxNotice.textContent = `${validityRules.checkbox.notice}`;
                }
            }
        }
    }
}

function checkInputValidity(e: React.ChangeEvent<HTMLInputElement>) {
    let input = e.target;
    let inputName: string = input.name;
    let label = input.closest('label');
    console.log(inputName);
    if (inputName === "checkbox" && !input.checked) {
        if(label != null) {
            label.getElementsByTagName('span')[0].textContent = `${validityRules[inputName].notice}`;
        }
        return;
    }
    if (inputName === "checkbox" && input.checked) {
        if(label != null) {
            label.getElementsByTagName('span')[0].textContent = ``;
        }
        return;
    }
    else if (input.value.match(validityRules[inputName].regexp) != null) {
        console.log('Correct');
        if (label != null) {
            label.getElementsByTagName('span')[0].textContent = ``;
        }
    }
    else {
        console.log('Wrong');
        if (label != null) {
            label.getElementsByTagName('span')[0].textContent = `${validityRules[inputName].notice}`;
        }
    }
}

function AppComponent(this: any) {
    return (
        <form className={styles.form} action="https://jsonplaceholder.typicode.com/posts" method="POST" onSubmit={(e) => submitForm(e)}>
            <fieldset>
                <legend>Введите Ваши данные</legend>
                <label className={styles.label}>Имя
                    <input className={styles.input} name="name" type="text" onChange={(e) => { checkInputValidity(e) }} autoComplete="off">
                    </input>
                    <span className={styles.validityNotice}></span>
                </label>
                <label className={styles.label}>Email
                    <input className={styles.input} name="email" type="email" onChange={(e) => { checkInputValidity(e) }} autoComplete="off">
                    </input>
                    <span className={styles.validityNotice}></span>
                </label>
                <label className={styles.label}>Телефон
                    <input className={styles.input} name="tel" type="tel" onChange={(e) => { checkInputValidity(e) }} autoComplete="off">
                    </input>
                    <span className={styles.validityNotice}></span>
                </label>
                <label className={styles.label}>Дата
                    <input className={styles.input} name="date" type="date" onChange={(e) => { checkInputValidity(e) }} autoComplete="off">
                    </input>
                    <span className={styles.validityNotice}></span>
                </label>
                <label className={[styles.label, styles.labelCheckbox].join(' ')}><p className={styles.agrText}>Я согласен на обработку персональных данных</p>
                    <input className={[styles.input, styles.inputCheckbox].join(' ')} name="checkbox" type="checkbox" onChange={(e) => { checkInputValidity(e) }}>
                    </input>
                    <span className={[styles.validityNotice, styles.validityNoticeCkeckbox].join(' ')}></span>
                </label>
                <input className={styles.submitBtn} type="submit" value="Отправить"></input>
            </fieldset>
        </form>
    );
}

export const App = hot(AppComponent);
