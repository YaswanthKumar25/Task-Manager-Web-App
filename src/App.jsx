import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const STORAGE_KEY = "todos";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    try {
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true
  });
  function addTask() {
    if (task.trim() === "") return;
    if (editIndex !== null) {
      setTasks(
        tasks.map((t, i) => (i === editIndex ? { ...t, text: task } : t)),
      );
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }
    setTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleTask(index) {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t,
      ),
    );
  }

  function startEdit(index) {
    setTask(tasks[index].text);
    setEditIndex(index);
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <TodoInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        editIndex={editIndex}
        cancelEdit={() => {
          setEditIndex(null);
          setTask("");
        }}
      />
      <TodoList
        setFilter={setFilter}
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        startEdit={startEdit}
      />
    </>
  );
}
export default App;
