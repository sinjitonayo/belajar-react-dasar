export default function AlertButton({ text }) {
  function handleClick() {
    alert(text);
  }
  return <button onClick={handleClick}>{text}</button>;
}
