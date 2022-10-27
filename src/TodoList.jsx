import React from 'react'
import { TodoItems } from "./TodoItems";
import {Menucss} from "./Menu.css"

export function TodoList ( {todos, toggleTodo }) {
  return (
    <ul>
        {todos.map ((todo) => (
            <TodoItems key={todo.id} todo={todo} toggleTodo={toggleTodo}/>

        ))}
    </ul>
  );
}
