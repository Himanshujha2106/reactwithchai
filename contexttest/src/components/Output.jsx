import React from 'react'
import useTheme from './Context'
const Output = () => {
  const {res}=useTheme()
  return (
    <div>
      the output is :{res}
    </div>
  )
}

export default Output
