import { useState, useEffect } from 'react';

export function useDataManagement(url) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData(); 
  }, [url]);

  async function fetchData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setTodos(data.map(todo => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        source: 'imported'
      })));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  async function addTodo(title) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          completed: false,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add todo');
      }
  
      const newTodo = await response.json();
  
      setTodos(prevTodos => [newTodo, ...prevTodos]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  async function deleteTodo(idToDelete) {
    try {
      const response = await fetch(`${url}/${idToDelete}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete');
      }

      fetchData();
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }

  async function updateTodo(idToUpdate, newTitle) {
    try {
      const todoToUpdate = todos.find(todo => todo.id === idToUpdate);
      if (!todoToUpdate) {
        throw new Error('Todo not found');
      }
  
      const updatedTodo = { ...todoToUpdate, title: newTitle };
  
      const response = await fetch(`${url}/${idToUpdate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
  
      const updatedTodoFromServer = await response.json();
  
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === updatedTodoFromServer.id ? updatedTodoFromServer : todo
        )
      );
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }
  
  return { todos, addTodo, deleteTodo, updateTodo };
}
