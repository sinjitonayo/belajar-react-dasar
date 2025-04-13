import Todo from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo text="Learn React" isCompleted={false} />
      <Todo text="Learn Vite" isCompleted={true} />
      <Todo text="Learn JavaScript" isCompleted={false} />
      <Todo text="Learn CSS" isCompleted={true} />
    </ul>
  );
}
