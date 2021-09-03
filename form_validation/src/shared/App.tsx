import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import styles from "./app.css";
import { useState } from 'react'

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

function checkValidityAndSubmit(e: React.FormEvent<HTMLFormElement>) {

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

function checkInputValidity(e: React.ChangeEvent<HTMLInputElement>) : string {
    let input = e.target;
    let inputName: string = input.name;
    let label = input.closest('label');
    let notice = label?.getElementsByTagName('span')[0];
    if (notice != undefined) {
        if (inputName === "checkbox" && !input.checked) {
            return `${validityRules[inputName].notice}`;
        }
        if (inputName === "checkbox" && input.checked) {
            return '';
        }
        else if (input.value.match(validityRules[inputName].regexp) != null) {
            return '';

        }
        else {
            return `${validityRules[inputName].notice}`;
        }
    }
    return '';
}

interface IProps {
    [key:string]:string;
}


function InputComponent (props : IProps) {

    const [validNotice, setState] = useState("");

    return (
        <label className={styles[props.labelClass]}>{props.labelText}
            <input className={styles[props.inputClass]} name={props.name} type={props.type} onChange={(e) => { setState(checkInputValidity(e)) }} autoComplete="off">
            </input>
            <span className={styles[props.validityNoticeClass]}>{validNotice}</span>
        </label>
    );
}

function CheckboxComponent (props : IProps) {

    const [validNotice, setState] = useState("");

    return (
        <label className={[styles[props.labelClass], styles[props.labelCheckBoxClass]].join(' ')}><p className={styles[props.CheckboxTextClass]}>{props.checkboxText}</p>
        <input className={styles[props.input]} name={props.name} type={props.type} onChange={(e) => { setState(checkInputValidity(e)) }}>
        </input>
        <span className={styles[props.validityNoticeClass]}>{validNotice}</span>
    </label>
    );
}

    function AppComponent(this: any) {
        return (
            <form className={styles.form} action="https://jsonplaceholder.typicode.com/posts" method="POST" onSubmit={(e) => checkValidityAndSubmit(e)}>
                <fieldset>
                    <legend>Введите Ваши данные</legend>

                    <InputComponent 
                        labelClass="label"
                        inputClass="input"
                        validityNoticeClass="validityNotice"
                        type="text"
                        name="name"
                        labelText="Имя"
                    />

                    <InputComponent 
                        labelClass="label"
                        inputClass="input"
                        validityNoticeClass="validityNotice"
                        type="email"
                        name="email"
                        labelText="Email"
                    />

                    <InputComponent
                        labelClass="label"
                        inputClass="input"
                        validityNoticeClass="validityNotice"
                        type="tel"
                        name="tel"
                        labelText="Телефон"
                    />

                    <InputComponent
                        labelClass="label"
                        inputClass="input"
                        validityNoticeClass="validityNotice"
                        type="date"
                        name="date"
                        labelText="Дата"
                    />

                    <CheckboxComponent
                        labelClass="label"
                        labelCheckBoxClass="labelCheckbox"
                        CheckboxTextClass="agrText"
                        checkboxText="Я согласен на обработку персональных данных"
                        inputClass="input"
                        validityNoticeClass="validityNotice"
                        type="checkbox"
                        name="checkbox"
                    />

                    <input className={styles.submitBtn} type="submit" value="Отправить"></input>
                </fieldset>
            </form>
        );
    }
    

    export const App = hot(AppComponent);
