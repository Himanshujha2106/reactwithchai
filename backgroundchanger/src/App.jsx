import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full shadow-lg "> 
      <button onClick={()=>setColor("red")} className="outline-none px-4 py-2 " style={{backgroundColor:"red"}} > Red</button>
      <button onClick={()=>setColor("green")} className="outline-none px-4 py-2 " style={{backgroundColor:"green"}} > green</button>
      <button onClick={()=>setColor("blue")} className="outline-none px-4 py-2 " style={{backgroundColor:"blue"}} > blue</button>
      <button onClick={()=>setColor("orange")} className="outline-none px-4 py-2 " style={{backgroundColor:"orange"}} > orange</button>
      <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-2 " style={{backgroundColor:"yellow"}} > yellow</button>
      </div>
      
      </div>
    </div>
  )
}

export default App
