import TodoItem from "./TodoItem";
function TodoList({ tasks, deleteTask, toggleTask, startEdit, setFilter }) {
  return (
    <>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <ul>
        {tasks.map((t, index) => (
          <TodoItem
            key={index}
            t={t}
            deleteTask={deleteTask}
            index={index}
            toggleTask={toggleTask}
            startEdit={startEdit}
          />
        ))}
      </ul>
    </>
  );
}
export default TodoList;
