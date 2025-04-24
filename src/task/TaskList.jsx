export default function TaskList({ items = [] }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
