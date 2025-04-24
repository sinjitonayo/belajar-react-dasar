import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
  const [items, setItems] = useImmer([]);

  function handleSubmit(item) {
    setItems((draft) => {
      draft.push(item);
    });
  }

  function handleDelete(index) {
    setItems((draft) => {
      draft.splice(index, 1);
    });
  }

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList items={items} onDelete={handleDelete} />
    </div>
  );
}
