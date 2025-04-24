import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }
  return (
    <form>
      <input type="text" value={item} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>
    </form>
  );
}
