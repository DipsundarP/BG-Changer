import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState('olive');

// function changeColor(color){
//   setColor(color)
// }
  
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-3 bg-white shadow-lg rounded-3xl">
          <button
            onClick={() => setColor("yellow")}
            className='px-4 py-1 text-black shadow-lg outline-none rounded-full'
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor(" green")}
            className="px-4 py-1 text-black shadow-lg outline-none rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Olive")}
            className="px-4 py-1 text-black shadow-lg outline-none rounded-full"
            style={{ backgroundColor: "LightGray" }}>
            First 
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
