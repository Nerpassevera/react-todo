// eslint-disable-next-line react/prop-types
export default function TodoListItem({ title, id, onRemoveTodo }) {
  return (
    <li key={id}>
      <div className="item-grid">
        <p>{title}</p>
        <button onClick={() => onRemoveTodo(id)}>Remove</button>
      </div>
    </li>
  );
}
