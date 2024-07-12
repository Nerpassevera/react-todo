export default function TodoList(list) {
  return (
    <ul>
      {list.content.map((listItem) => {
        return <li key={listItem.id}> {listItem.title} </li>;
      })}
    </ul>
  );
}
