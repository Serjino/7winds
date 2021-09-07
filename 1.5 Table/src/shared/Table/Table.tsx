import React from 'react';
import styles from './table.css';
import { useState } from 'react';

export function Table() {

  const [isSorted, setSortStatus] = useState(false);

  const data = [
    { num: 0, fruit: 'Яблоко', description: 'Яблоко — сочный плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии и для приготовления напитков' },
    { num: 1, fruit: 'Ананас', description: 'Ананас настоящий представлен в культуре многочисленным разнообразием сортов не только в Южной Америке, где растут ' },
    { num: 2, fruit: 'Питахайя', description: 'Питайя, или питахайя, — общее название плодов нескольких видов кактусов из родов Hylocereus и Stenocereus.' },
    { num: 3, fruit: 'Гранат', description: 'Плоды граната употребляются в пищу в сыром виде, в приготовленных блюдах, напитках, для получения гранатового сока.' },
    { num: 4, fruit: 'Маракуйя', description: 'Маракуйя — фрукт, плод ряда тропических лиан из рода Страстоцвет — обычно вида Страстоцвет съедобный.' }
  ]

  interface DATA extends Object {
    num: number;
    fruit: string;
    description: string;
  }

  function sort(array: DATA[], isSorted: boolean) {
    let sortedMassive;
    if (isSorted == true) {
      sortedMassive = array.sort(function (a, b) {
        if (a.num > b.num) return -1;
        if (a.num == b.num) return 0;
        if (a.num < b.num) return 1;
        return 0;
      })
    }
    if (isSorted == false) {
      sortedMassive = array.sort(function (a, b) {
        if (a.num > b.num) return 1;
        if (a.num == b.num) return 0;
        if (a.num < b.num) return -1;
        return 0;
      });
    }
    console.log(sortedMassive);
    return renderTableContent(sortedMassive);
  }

  const renderTableContent = (data: DATA[] | undefined) => {
    if (data != undefined) {
      return (
        data.map((dataItem, index) =>
          <tr key={index}>
            <td><span className={styles.span}>{dataItem.num}</span></td>
            <td><span className={styles.span}>{dataItem.fruit}</span></td>
            <td><span className={styles.span}>{dataItem.description}</span></td>
          </tr>
        )
      )
    }
  }

  return (

    <table className={styles.table}>

      <thead></thead>
      <tbody>
        <tr className={styles.number}>
          <th onClick={() => {
            setSortStatus(!isSorted)
          }}>№</th>
          <th>Номер</th>
          <th className={styles.descriptionCell}>Описание</th>
        </tr>
        {sort(data, isSorted)}
      </tbody>
      <tfoot>

      </tfoot>
    </table>

  );
}
