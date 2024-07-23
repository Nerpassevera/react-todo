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
    console.log(todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle("");
  }


  return (
    <form onSubmit={handleAddTodo} onChange={handleTitleChange}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Type in todo to add to the list"
      />
      <button>Add</button>
    </form>
  );
}
