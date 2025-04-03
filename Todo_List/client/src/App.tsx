import React from "react";
import TodoView from "./view/viewModel/TodoView";
import { useTodoVM } from "./view/viewModel/TodoVM";

const App: React.FC = () => {
  const { todos, newTodo, setNewTodo, addTodo, deleteTodo, toggleTodo } = useTodoVM();

  return (
    <TodoView
      todos={todos}
      newTodo={newTodo}
      setNewTodo={setNewTodo}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  );
};

export default App;
