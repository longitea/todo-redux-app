import React from 'react'
import './App.css'
import Exam from './redux/Exam'

export default function App() {


    // Imutation: Bat bien
    const arr = [1,2,3]
    let arr2 = arr
    // arr2.push(4)
    // console.log(arr);


    let arrSlice = arr.slice()
    arrSlice.push(4)
    console.log('arrSlice: ', arr)

    let arrConcat = arr.concat()
    arrConcat.push(4)
    console.log('arrConcat: ', arr)


    let arrMap = arr.map(e => e)
    arrMap.push(5)
    console.log('arrMap: ', arrMap)
    console.log('arrMap: ', arr)


  return (
    <div>
        <h1>App</h1>
        <Exam />
    </div>
  )
}
