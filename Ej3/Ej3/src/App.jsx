import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from "./componentes/Contact.jsx";

function App() {
  const [show, setShow] = useState(true)

    const click = () => {
      setShow(!show)
    }

  return (
    <>
        <button onClick={click}>{show ? "Ocultar" : "Mostrar"}</button>
        <Contact show={show} email={"email@gmail.com"} phone={"456 66 80 91"} />
    </>
  )
}

export default App
