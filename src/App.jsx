import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mb-16 flex justify-center gap-12">
        <a href="https://vite.dev" target="_blank">
          <img
            src="/vite.svg"
            className="transition-filter h-24 w-24 duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="transition-filter h-27 w-27 animate-[spin_20s_linear_infinite] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-3xl font-bold">Vite + React</h1>
      <div className="card mt-6 font-medium">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4 text-xs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-xs font-thin text-gray-500">
        Click the Vite and React logos. See what happens.
      </p>
      <p className="m-6 rounded-xl border-2 border-blue-500 px-6 py-2 text-sm font-thin text-blue-500">
        Learn to Integrate React with Tailwind CSS
      </p>
    </>
  );
}

export default App;

// It's crazy but Hitesh reduces all the above to show us how simply the above code works
// import "./App.css";
// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// t }
