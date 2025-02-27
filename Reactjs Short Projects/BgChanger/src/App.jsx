import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={()=>setColor("red")}
          
          className="bg-red-600 outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={()=>setColor("blue")}

          className="bg-blue-600 outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={()=>setColor("green")}
          
          className="bg-green outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={()=>setColor("purple")}

          className="bg-purple-800 outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button
          onClick={()=>setColor("#BE25A5")}

          className="bg-pink-800 outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
          style={{backgroundColor: "#BE25A5"}}
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
