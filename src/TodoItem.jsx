function TodoItem({ t, deleteTask, index, toggleTask, startEdit }) {
  return (
    <li>
      <span
        onClick={() => toggleTask(index)}
        style={{
          textDecoration: t.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {t.text}
      </span>
      <button onClick={() => startEdit(index)}>✏️</button>
      <button onClick={() => deleteTask(index)}>❌</button>
    </li>
  );
}
export default TodoItem;
