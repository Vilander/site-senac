import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import senacLogo from './assets/senac.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://sp.senac.br/americana" target="_blank">
          <img src={senacLogo} className="logo react" alt="Senac logo" />
        </a>
      </div>
      <h1>Começando com React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador é {count}
        </button>
        <p>
          <code>Clique na imagem e conheça nossos cursos</code>
        </p>
      </div>
      <p className="read-the-docs">
      🔹🔹🔹Beba água 🫗
      </p>
    </>
  )
}

export default App
