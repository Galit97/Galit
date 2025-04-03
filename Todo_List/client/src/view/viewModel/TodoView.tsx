import React from "react";
import { useTodoVM } from "./TodoVM";
import styles from "./Todo.module.scss";

const TodoView: React.FC = () => {
  const { todos, newTodo, setNewTodo, addTodo, toggleTodo, deleteTodo } = useTodoVM();

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoHeader}>Todo List</h1>
      <div className={styles.todoInputContainer}>
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo._id} className={todo.isDone ? "done" : ""}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
              {todo.title}: {todo.description}
            </span>
            <div className={styles.todoActions}>
              <button className={styles.doneBtn} onClick={() => toggleTodo(todo._id, todo.isDone)}>
                {todo.isDone ? "Undo" : "Done"}
              </button>
              <button className={styles.removeBtn} onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
