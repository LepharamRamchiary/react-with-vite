import { useState, useEffect } from "react";

function App() {
  // const [colour, setColor] = useState("blue");
  const [colour, setColor] = useState(localStorage.getItem("bgColor") || "blue");

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem("bgColor", colour);
  }, [colour]);

  return (
    <div
      className="w-full h-screen flex justify-center"
      style={{ backgroundColor: colour }}
    >
      <div className="flex justify-center items-end">
        <div className="flex gap-2 bg-white h-20 px-4 py-4 mb-4 rounded-xl">
          <button 
            onClick={() => setColor("red")}  
            className="bg-red-500 px-2 rounded-xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("orange")}
            className="bg-orange-500 px-2 rounded-xl"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
