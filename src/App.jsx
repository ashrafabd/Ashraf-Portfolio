import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Ashraf Portfolio</h1>
        <p>A simple React app built with Vite</p>
      </header>

      <main className="main">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </button>
        <p className="hint">
          Edit <code>src/App.jsx</code> and save to test hot reload
        </p>
      </main>
    </div>
  )
}

export default App
