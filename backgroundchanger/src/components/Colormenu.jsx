import React from 'react'
import Colorbtn from './Colorbtn'
const Colormenu = () => {
  return (
    <div>
      <Colorbtn clas key={1} color={"red"}/>
      <Colorbtn color={"green"}/>
      <Colorbtn color={"blue"}/>
      <Colorbtn color={"yellow"}/>
      <Colorbtn color={"purple"}/>
      <Colorbtn color={"orange"}/>
    </div>
  )
}

export default Colormenu
