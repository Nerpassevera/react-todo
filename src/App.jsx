import { useState, useEffect } from "react";
import "./App.css";
// import WrapTheList from "./WrapTheList";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const [ todoList, setTodoList ] = useState(JSON.parse(localStorage.getItem('savedTodoList')));
  
  useEffect(()=>{
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  return [ todoList, setTodoList ];
}

function App() {

  const [ todoList, setTodoList ] = useSemiPersistentState();
  
  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoList content={todoList}></TodoList>
      <AddTodoForm onAddTodo={addTodo}/>
    </>
  );

}

export default App;
