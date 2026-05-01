function TodoInput({ task, setTask, addTask, editIndex, cancelEdit }) {
  return (
    <>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      {editIndex !== null && <button onClick={cancelEdit}>Cancel</button>}
      <button onClick={addTask}>{editIndex !== null ? "Update" : "Add"}</button>
    </>
  );
}
export default TodoInput;
