// import { useState } from 'react'
import './App.css'
import useStorage from './components/useStorage'

function App() {
  const [value, setValue] = useStorage("inputText","")

  return (
    <>
      <input type="text" onChange={(e)=> setValue(e.target.value)} />
    </>
  )
}

export default App
