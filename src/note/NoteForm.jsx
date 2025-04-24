import { useState } from "react";

export default function TaskForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onAddNote(text);
    setText("");
  }

  return (
    <form>
      <input
        placeholder="Add Note"
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Note</button>
    </form>
  );
}
