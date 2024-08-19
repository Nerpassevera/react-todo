/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";

export default function TodoList({ content, onRemoveTodo }) {


  if (content !== null) {

    return (
      <ul>
        {content.map((listItem) => {
          return (
            <TodoListItem
              title={listItem.title}
              id={listItem.id}
              key={listItem.id}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
