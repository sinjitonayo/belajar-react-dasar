import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { useImmerReducer } from "use-immer";

let id = 0;
const initialNotes = [
  { id: id++, text: "Note 1", done: true },
  { id: id++, text: "Note 2", done: false },
  { id: id++, text: "Note 3", done: false },
  { id: id++, text: "Note 4", done: false },
];

// function notesReducer(notes, action) {
//   switch (action.type) {
//     case "ADD_NOTE":
//       return [...notes, { id: id++, text: action.text, done: false }];
//     case "UPDATE_NOTE":
//       return notes.map((note) =>
//         note.id === action.note.id
//           ? { ...note, text: action.text, done: action.done }
//           : note
//       );
//     case "DELETE_NOTE":
//       return notes.filter((note) => note.id !== action.note.id);
//     default:
//       throw new Error("Unknown action type");
//   }
// }

function notesReducer(draft, action) {
  if (action.type === "ADD_NOTE") {
    draft.push({ id: id++, text: action.text, done: false });
  }
  if (action.type === "UPDATE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.note.id);
    if (index !== -1) {
      draft[index].text = action.text;
      draft[index].done = action.done;
    }
  }
  if (action.type === "DELETE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.note.id);
    if (index !== -1) {
      draft.splice(index, 1);
    }
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({ type: "ADD_NOTE", text });
  }

  function handleChangeNote(newNote) {
    dispatch({
      type: "UPDATE_NOTE",
      note: newNote,
      text: newNote.text,
      done: newNote.done,
    });
  }

  function handleDeleteNote(note) {
    dispatch({ type: "DELETE_NOTE", note });
  }

  return (
    <div className="">
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
