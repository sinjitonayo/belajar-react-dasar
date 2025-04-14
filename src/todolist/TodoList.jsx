import Todo from "./Todo";

export default function TodoList() {
  const data = [
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn Vite", isCompleted: true },
    { id: 3, text: "Learn JavaScript", isCompleted: false },
    { id: 4, text: "Learn CSS", isCompleted: true },
  ];

  const todos = data.map((todo) => {
    return (
      <Todo key={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
    );
  });
  return <ul>{todos}</ul>;
}
