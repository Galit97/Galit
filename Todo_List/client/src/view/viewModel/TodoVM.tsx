import { useState, useEffect } from "react";
import { TodoModel } from "../model/TodoModel";

export const useTodoVM = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTodos();
  }, []);


  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/todos/get-todos");
      const data: TodoModel[] = await response.json();
      setTodos(Array.isArray(data) ? data : []);  
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]); 
    }
  };

  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/todos/add-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo.title,
          description: newTodo.description,
        }),
      });
      if (response.ok) {
        fetchTodos(); 
        setNewTodo({ title: "", description: "" }); 
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id: string, isDone: boolean) => {
    try {
      await fetch(`http://localhost:3000/api/todos/toggle-todo/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: !isDone }),  
      });
      fetchTodos(); 
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/todos/delete-todo/${id}`, {
        method: "DELETE", 
      });
      fetchTodos();  
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
