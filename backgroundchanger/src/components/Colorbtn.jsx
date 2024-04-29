import React from 'react'

const Colorbtn = ({color}) => {
  return (
    <>
    <button className='m-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>{color} </button>
    </>
  )
}

export default Colorbtn
