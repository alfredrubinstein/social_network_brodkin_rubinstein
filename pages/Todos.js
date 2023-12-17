import React, { useRef } from 'react';
import TodoContentDiv from "../components/TodoContentDiv";
import { useDataManagement } from '../helpers/useDataManagement';
import plus from "../images/add.png";

export function Todos() {
  const { todos, addTodo, deleteTodo, updateTodo } = useDataManagement("http://localhost:3500/todos");

  const input = useRef();

  function handleAddElement() {
    const inputValue = input.current.value;
    if (inputValue) {
      addTodo(inputValue);
      input.current.value = "";
    }
  }

  return (
    <>
      <div id="container">
        <div>
          <center>
            <h1>מטלות</h1>
          </center>
        </div>
        <input type="text" placeholder="הכנס משימה חדשה" ref={input} />
        <img src={plus} onClick={handleAddElement} width="30px" title="הוסף" />
        <div>
          {todos.map(todo => (
            <TodoContentDiv
              key={todo.id}
              id={todo.id}
              contentText={todo.title}
              onDelete={() => deleteTodo(todo.id)}
              onUpdateTodo={(completed) => updateTodo(todo.id, completed)}
              completed={todo.completed}
              source={todo.source}
            />
          ))}
        </div>
      </div>
    </>
  );
}

