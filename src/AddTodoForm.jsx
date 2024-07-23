/* eslint-disable react/prop-types */
// import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  // const [todoTitle, setTodoTitle] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    let todoTitle = document.getElementById("todoTitle");
    console.log(todoTitle.value);
    onAddTodo(todoTitle.value);
    todoTitle.value = "";

  }

  // document.addEventListener(onsubmit, handleAddTodo);

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        id="todoTitle"
        // value={todoTitle}
        // onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Type in todo to add to the list"
      />
      <button>Add</button>
    </form>
  );
}
