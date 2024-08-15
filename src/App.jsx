import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    Object.values(JSON.parse(localStorage.getItem("savedTodoList")))
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    if (todoList) {
      setTodoList([...todoList, newTodo]);
    } else {
      setTodoList([newTodo]);
    }
  }

  function removeTodo(id) {
    const updatedToDo = todoList.filter((item) => item.id !== id);
    setTodoList(updatedToDo);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoList content={todoList} onRemoveTodo={removeTodo}></TodoList>
      <AddTodoForm onAddTodo={addTodo} />
    </>
  );
}

export default App;
