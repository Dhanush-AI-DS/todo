import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/TODO.css'
import TODO from './Components/TODO'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TODO/>
    </>
  )
}

export default App
