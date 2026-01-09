import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Skills} from "./componentes/Skills.jsx";

function App() {

    const [showSkills, setShowSkills] = useState(false);
    const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"]

    const click = () => {
        setShowSkills(!showSkills)
    }

    return (
    <>
        <button onClick={click}>SHOW</button>
        {showSkills ? (<Skills skils={skills} />) : (<></>)}
    </>
  )
}

export default App
