import React, {useState} from "react";
import {TodoList} from './TodoList';


    export function App() {
        const [todos, setTodos]= useState();
        
        return (
        <React.Fragment>
            <TodoList todos= {todos} /> 
            <input type="text" placeholder="Nuvo Proyectyo" />
            <button>+</button>
        </React.Fragment>
        )
        }