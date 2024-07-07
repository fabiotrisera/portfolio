import { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header flex items-center">
        <h1>Header</h1>
        <div className="flex items-center ml-auto">
          <MdDarkMode className="size-6" />
        </div>
      </div>
      <div className="content content-center">
        <div className="flex flex-row justify-center">
          <a rel="noopener" href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a rel="noopener" href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
