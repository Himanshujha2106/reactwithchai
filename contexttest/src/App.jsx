import { useEffect, useState } from 'react'
import './App.css'
import { DataProvider } from "./components/Context.js"
import Output from "./components/Output.jsx"
function App() {

 const [res,setRes]=useState(5)
  // const [themeMode, setThemeMode] = useState('light')

   
  return (
    <>
      <DataProvider value={{ res }}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            </div>
            {res}
<Output/>
            <div className="w-full max-w-sm mx-auto">
            </div>
          </div>
        </div>
      </DataProvider>

    </>
  )
}

export default App
