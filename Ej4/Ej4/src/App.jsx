import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from "./componente/TaskForm.jsx";
import TaskList from "./componente/TaskList.jsx";

function App() {
    const [funcion, setfuncion] = useState(true);
  return (
    <>
        <button onClick={() => setfuncion(!funcion)}>{funcion ? "Crear Tarea" : "Ver tareas"}</button>
        {funcion ? (<TaskList/>): (<TaskForm/>) }

    </>
  )
}

export default App
