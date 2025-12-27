import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click the Vite and React logos. See what happens.
      </p>
      <p className="rounded-xl border-2 border-blue-500 p-2 text-3xl font-bold text-blue-500">
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
