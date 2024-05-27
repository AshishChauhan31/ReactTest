import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReturnCard from '../Customcomponents/card'
import './App.css'

function App() {
  return (
    <>
      <h1 className="bg-green-400 rounded-xl text-black p-5 mb-4" >Vite + React + Tailwind</h1>
      <ReturnCard Username = "Ashish" btnText = "Click me!!"/>
      <ReturnCard Username = "Ansh"/>
    </>
  )
}

export default App
