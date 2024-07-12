export default function AddTodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">
        Title
      </label>
      <input id="todoTitle"placeholder="Type in todo to add to the list"/>
      <button>Add</button>
    </form>
  )
}