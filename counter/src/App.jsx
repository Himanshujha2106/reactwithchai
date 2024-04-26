import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    setCounter(counter)
    console.log(counter+1)
    }
  const remValue=()=>{
    setCounter(counter-1)
    console.log(counter)
    }
  return (
    <>
    <h1>Value : {counter} </h1>
    <button onClick={addValue}>increase Value</button>
    <br />
    <br />
    <button onClick={remValue}>decrease Value</button>
     </>
  )
}

export default App
