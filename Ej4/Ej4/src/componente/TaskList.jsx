import {useEffect, useState} from 'react'
import TaskItem from "./TaskItem.jsx";

function TaskList() {

    const [todos, setTodos] = useState([]);
    function tenRandomTodos (){

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                let randomTodos = [];

                for (let i = 0; i < 10; i++) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    randomTodos.push(data[randomIndex]);
                }
                console.log(randomTodos);
                setTodos(randomTodos);
            })
            .catch(err => console.error("Error:", err));

    }

    useEffect(() => {
        tenRandomTodos();
    },[])

    return (
        <>
            <h1>Lista de tareas</h1>
            <ul>
                {todos.map((todo, index) => (
                    <TaskItem key={index} todo={todo} ></TaskItem>
                ))}
            </ul>

        </>
    )
}

export default TaskList;
