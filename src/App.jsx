import { useState } from "react";
import "./App.css";
// import WrapTheList from "./WrapTheList";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  const [ todoList, setTodoList ] = useState([]);

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoList content={todoList}></TodoList>
      <AddTodoForm onAddTodo={(item) => {addTodo(item)}}/>
    </>
  );

}

export default App;
