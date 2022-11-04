import React, {useState, useRef, Fragment} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import {TodoList} from './TodoList';



    export function App() {
        <div>
            PROYECTO GAULEX. 
            equipo Esspreso.
        </div>
        const [todos, setTodos]= useState([
            {id: 1, task: "Proyecto 1", completed: false},
        ]);
        const todoTaskRef = useRef ();

        const toggleTodo = (id => {
            const newTodos = [... todos];
            const todo= newTodos.find ((todo) => todo.id == id);
            todo.completed = !todo.completed;
            setTodos (newTodos);
    });
    

        const handleTodoAdd = (event)=> {
        const task = todoTaskRef.current.value;
        if (task == "") return;

        setTodos((prevTodos) => {
            return [... prevTodos, {id: uuidv4(), task, completed: false}];
        });

        todoTaskRef.current.value = null;
    }

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
      };
        return (
            <Fragment>
                <TodoList todos= {todos}  toggleTodo={toggleTodo} /> 
             <input ref= {todoTaskRef} type="text" placeholder="Nuvo Proyectyo" />
                <button onClick={handleTodoAdd }>+ añadir</button>
                <button onClick={handleClearAll }>- eliminar</button>
            </Fragment>
        );
    }