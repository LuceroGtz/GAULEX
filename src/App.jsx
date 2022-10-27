import React, {useState, useRef} from "react";
import { v4 as uuidv4 } from "uuid";
import {TodoList} from './TodoList';



    export function App() {
        const [todos, setTodos]= useState([
            {id: 1, task: "Proyecto 1", completed: false},
        ]);
        const todoTaskRef = useRef ();

        const handleTodoAdd = ()=> {
        const task = todoTaskRef.current.value;
        if (task == "") return;

        setTodos((prevTodos) => {
            return [... prevTodos, [id = uuidv4, task, completed =false]]
        });

        todoTaskRef.current.value = null;

        }
        
        return (
        <React.Fragment>
            <TodoList todos= {todos} /> 
            <input ref= {todoTaskRef} type="text" placeholder="Nuvo Proyectyo" />
            <button onClick={handleTodoAdd }>+</button>
        </React.Fragment>
        )
        }