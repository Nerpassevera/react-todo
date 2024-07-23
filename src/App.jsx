import { useState, useEffect } from "react";
import "./App.css";
// import WrapTheList from "./WrapTheList";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  // const [ todoList, setTodoList ] = useState([]);
  const [ newTodo, setNewTodo ] = useState('');

  const todoList = [
    {
      id: 0,
      title: 'Read 37 pages of "The Road To React 2023',
    },
    {
      id: 1,
      title: "Watch videos from week 1",
    },
    {
      id: 2,
      title: "Complete week 1 assignment",
    },
  ];

  useEffect(()=>{
    console.log("useEffect!!! NewTOdo:", newTodo);

  }, [newTodo])




  return (
    <>
      <h1>Todo List</h1>
      <TodoList content={todoList}></TodoList>
      <AddTodoForm onAddTodo={(text) => {setNewTodo(text)}}/>
      <p>{ newTodo }</p>

      {/* This is a component I imagined and decided to implement.
      <WrapTheList list={todoList} mainTagName = 'ul'/> */}
    </>
  );

}

export default App;
