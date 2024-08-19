import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve todo list from browser's local storage
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        let localStorageData = localStorage.getItem("savedTodoList");

        localStorageData =
          localStorageData === null
            ? []
            : JSON.parse(JSON.parse(localStorageData).data.todoList);
        return resolve(localStorageData);
      }, 2000);
    })
      .then((result) => {
        setTodoList(result);
      })
      .then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!isLoading /*  && todoList.length !== 0 */) {
      localStorage.setItem(
        "savedTodoList",
        JSON.stringify({ data: { todoList: JSON.stringify(todoList) } })
      );
    }
  }, [todoList]);

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TodoList content={todoList} onRemoveTodo={removeTodo}></TodoList>
          <AddTodoForm onAddTodo={addTodo} />
        </>
      )}
    </>
  );
}

export default App;
