import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myobj={
  username:"himanshu"

}
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind</h1>
      {/* <Card username="himanshu jha"/>
      <Card username="guys i am back" /> */}
      <Card />
      <Card username={myobj.username} btntext="clickme"/>
      <Card username={myobj.username} btntext="Visit me" />

    </>
  )
}

export default App
