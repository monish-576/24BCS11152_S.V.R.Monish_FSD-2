import { useState } from "react";

export default function Todo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);


    const addTask = () => {

        if(task.trim() !== ""){

            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: task,
                    completed: false
                }
            ]);

            setTask("");
        }
    }


    const deleteTask = (id) => {

        setTodos(
            todos.filter((todo)=> todo.id !== id)
        );

    }


    const completeTask = (id) => {

        setTodos(
            todos.map((todo)=>
                todo.id === id
                ?
                {...todo, completed: !todo.completed}
                :
                todo
            )
        );

    }


    return (

        <div className="todo-container">

            <h1>Todo List</h1>


            <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />


            <button onClick={addTask}>
                Add
            </button>


            {
                todos.map((todo)=>(

                    <div className="todo-item" key={todo.id}>

                        <span
                        onClick={()=>completeTask(todo.id)}
                        className={todo.completed ? "completed" : ""}
                        >

                            {todo.text}

                        </span>


                        <button
                        onClick={()=>deleteTask(todo.id)}
                        >
                            Delete
                        </button>

                    </div>

                ))
            }


        </div>

    )
}