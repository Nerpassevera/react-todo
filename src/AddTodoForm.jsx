/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(e){
    let newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    document.getElementById('titleForm').reset();
  }


  return (
    <form id="titleForm" onSubmit={handleAddTodo} onChange={handleTitleChange}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        placeholder="Type in todo to add to the list"
      />
      <button>Add</button>
    </form>
  );
}
