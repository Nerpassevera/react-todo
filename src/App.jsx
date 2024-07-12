// import React from "react";
import "./App.css";
import WrapTheList from "./WrapTheList";

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

/* // This is the initial implementation of the function we were expected to write for the assessment.
const wrapTheList = (list) => {
  return list.map((listItem) => {
    return (
      <li key={listItem.id}> {listItem.title} </li>
    );
  });
}; */

function App() {
  return (
    <>
      <h1>Todo List</h1>
      {/* This is a component I imagined and decided to implement. */}
      <WrapTheList list={todoList} mainTagName = 'ul'/>
    </>
  );

}

export default App;
