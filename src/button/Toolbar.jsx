export default function Toolbar({ onClick }) {
  return (
    <div onClick={onClick}>
      <button onClick={onClick}>Toolbar Button</button>
      <button onClick={onClick}>Toolbar Button 2</button>
    </div>
  );
}
// This code defines a functional component named `Toolbar` that takes `children` as a prop.
