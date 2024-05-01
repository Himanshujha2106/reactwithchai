import React, { useState, useContext, useEffect, useId } from 'react'
import useTheme from "./Context"
const {ans}=useTheme()
const Input = () => {
   


    return (
        <>
            <h1>ans:</h1>
            {ans}


        </>
    )
}

export default Input
