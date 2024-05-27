import { useState } from 'react'
function App() {  
  const [color, setColor] = useState("olive")
  
  return (
      <div className="w-full h-screen bg-green-600" style={{backgroundColor:color}}> 
      <div className='fixed flex flex-wrap justify-evenly bottom-12 inset-x-0 px-2'>
      <div className='fixed flex flex-wrap justify-center shadow-lg gap-2 bg-white px-3 py-1 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor:"Red"}} onClick={() => setColor("red")}>
            Red
          </button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor:"Green"}} onClick={() => setColor("Green")}>
            Green
          </button>
          <button className='outline-none px-4 py-1 rounded text-white' style={{backgroundColor:"Black"}} onClick={() => setColor("Black")}>
            Black
          </button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor:"Pink"}} onClick={() => setColor("Pink")}>
            Pink
          </button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor:"Yellow"}} onClick={() => setColor("Yellow")}>
            Yellow
          </button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor:"Aquamarine"}} onClick={() => setColor("Aquamarine")}>
          Aquamarine
          </button>
          <button className='outline-none px-4 py-1 rounded' style={{backgroundColor:"Gray"}} onClick={() => setColor("Gray")} >
          Gray
          </button>
          </div>
          </div>
        </div>
  )
}
export default App
