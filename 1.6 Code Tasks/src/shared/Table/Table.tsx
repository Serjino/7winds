import React from 'react';
import styles from './table.css';
import { useState } from 'react';

interface RndDataObject {
  day: number
  value: string
}


export function Table() {

  function getRndData(): RndDataObject[] {
    function genNum(): number {
        return Math.floor(Math.random() * (30 + 1))
    }
  
    const arr: number[] = []
    for (; arr.length < 5 ;) {
        const num = genNum()
        if (arr.includes(num)) continue
        arr.push(num)
    }
    let value = arr.map(num => ({day: num, value: num + 'i'}));
    console.log(value)
    return value
  }

  const DATA = [
    { day: 4, value: '4i' },
    { day: 30, value: '30i' },
    { day: 18, value: '18i' },
    { day: 19, value: '19i' },
    { day: 28, value: '28i' }
  ]
  

  function sortedDayList (someData: {day: number, value : string}[]) {
    let daysFromFunc = someData.map(el=>el.day)
    let daysOutputArr = [];
    for (let i = 0; i <= 30; i++) {
      let newDate : {day: number, value : string | null} = {
        day: i,
        value: null,
      };
      for (let ii = 0; ii < daysFromFunc.length; ii++ ) {
        if (daysFromFunc[ii] == i) {
          newDate.value =  `${i + 'i'}`    
        }
      }
      daysOutputArr.push(newDate)
    }
    console.log(daysOutputArr)
  }

  sortedDayList(getRndData())

  let array = [
		{state: 'created', count: 834},
		{state: 'deleted', count: 400},
		{state: 'updated', count: 24}
]

let outArr: { [key : string]: string | number; } = {};

array.map(el => {
  let newKeyValue = Object.values(el);
  let myKey = newKeyValue[0];
  let value = newKeyValue[1];
  outArr[myKey] = value;
})

console.log(outArr)



  return (
    <div>
      
    </div>
  )
  
}
