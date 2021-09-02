import React from 'react';
import styles from './loadfile.css';
import { useState } from 'react';

export function LoadFile() {

  function Component({ CreateFileList }: any) {

    let filesArr: Blob[] = [];

    function fileListToBlobArr(e: React.ChangeEvent<HTMLInputElement>) {
      let filesFromInput = e.target.files;
      if (filesFromInput != undefined) {

        for (let i = 0; i < filesFromInput?.length; i++) {
          console.log(filesFromInput?.item(i));
          const BLOB = new Blob([`${filesFromInput?.item(i)}`], { type: `${filesFromInput?.item(i)?.type}` });
          filesArr.push(BLOB);
        }
        CreateFileList(filesArr)
      }
      return [];
    }

    return (
      <div className={styles.inputWrapper}>
        <input className={styles.chooseFileBtn} id="input" type="file" multiple={true} name="files[]" accept="image" onChange={(e) => fileListToBlobArr(e)}>
        </input>
        <span className={styles.chooseFileText}>
          <svg className={styles.downloadIcon} width="21" height="20" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 24.1304L24.1603 9.13043L6.83975 9.13043L15.5 24.1304ZM14 6.55671e-08L14 10.6304L17 10.6304L17 -6.55671e-08L14 6.55671e-08Z" fill="white" />
            <line x1="2" y1="20.2173" x2="2" y2="29.9999" stroke="white" strokeWidth="4" />
            <line x1="29" y1="30" x2="29" y2="20.2174" stroke="white" strokeWidth="4" />
            <line y1="28" x2="31" y2="28" stroke="white" strokeWidth="4" />
          </svg>
          Выберете файл
        </span>
      </div>
    )
  }


  return (
    <form className={styles.uploadForm}>
      <fieldset className={styles.fieldSet}>
        <legend className={styles.legend}>

        </legend>
          <Component CreateFileList={(v: any) => { console.log(v) }} />
        <div>

        </div>
      </fieldset>
    </form>
  );
}

