import { useState } from 'react'

function App(props) {

    return (
            <li key={props.index}>
                <h3>{props.todo.title}</h3>
                <p>Completado: {props.todo.completed.toString()}
                </p>
            </li>
    )
}

export default App
