import React from 'react'
import { TodoItems } from ".TodoItems";

export function TodoList ( {todos}) {
  return (
    <ul>
        {todos.map ((todo) => (
            <li>Proyecto</li>
        ))}
    </ul>
  );
}
