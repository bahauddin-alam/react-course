import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = userState("olive");

  return (
    <div
      className="w-full h-screen duration-200 bg-black
    "
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <botton className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            test
          </botton>
          <botton className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            test 2
          </botton>
        </div>
      </div>
    </div>
  );
}

export default App;
