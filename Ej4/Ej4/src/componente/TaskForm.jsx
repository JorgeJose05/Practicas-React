import { useState } from 'react'

function TaskForm() {
    const [title, setTitle] = useState('')
    const [completed, setCompleted] = useState('')

    const changeTitle = e => {
        setTitle(e.target.value)
    }

    function handleSubmit() {
        console.log(title)
    }

    function postfinal() {
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => {
                setCompleted(data)
            })
            .catch(error => console.error(error));


    }

    return (
        <>
            <label>Titulo</label>
            <input type="text" onChange={changeTitle} />
            <button onClick={postfinal}>Confirmar</button>
            <p>{completed}</p>
        </>
    )
}

export default TaskForm;
