import { NoteContext, NotesDispatchContext } from "./NoteContext";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
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

function notesReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <NoteContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <div className="">
          <h1>Note App</h1>
          <NoteForm />
          <NoteList notes={notes} />
        </div>
      </NotesDispatchContext.Provider>
    </NoteContext.Provider>
  );
}
