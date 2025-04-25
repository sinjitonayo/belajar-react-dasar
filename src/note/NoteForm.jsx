import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");

  const dispatch = useContext(NotesDispatchContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", text: text });
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
