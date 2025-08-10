import { useState } from 'react'
import sunny from "./assets/sunny.png"; 


function App() {
  const [color, setColor] = useState("olive")

  return (
    <> 
      <div className='px-6'>

      <div className='p-6  max-w-sm mx-auto rounded-2xl flex justify-center shadow-lg mt-6'
      style={{backgroundColor : color}}>
        <div>
          <img className='h-96' src={sunny} alt="sunny image" />
        </div>
        </div>
      </div>
      <div className='p-6 flex justify-center font-sans'>
        <h1 className=' text-2xl text-black'>Change background color </h1> 
      </div>

      <div className=' fixed flex flex-wrap inset-x-0  justify-center bg-white shadow-3xl'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg px-3 py-2 rounded-2xl bg-white'>

        <button onClick={()=> (setColor("orange"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"orange"}}>Red</button>
        <button onClick={()=> (setColor("indigo"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"indigo"}}>Blue</button>
        <button onClick={()=> (setColor("green"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=> (setColor("purple"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={()=> (setColor("fuchsia"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"fuchsia"}}>Fuchsia</button>
        <button onClick={()=> (setColor("pink"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=> (setColor("gray"))} className=' outline-none px-4 py-2 text-white rounded-2xl shadow--lg hover:scale-105' style={{backgroundColor:"gray"}}>Gray</button>

        </div>
      </div>

    </>
  )
}

export default App
