/* eslint-disable react/prop-types */
import TodoListItem from './TodoListItem';

export default function TodoList({ content }) {
  return (
    <ul>
      {content.map((listItem) => {
        return <TodoListItem title={listItem.title} key={listItem.id}/>;
      })}
    </ul>
  );
}
