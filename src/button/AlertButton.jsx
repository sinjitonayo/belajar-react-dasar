export default function AlertButton({ text, message }) {
  function handleClick(e) {
    console.info("Button clicked:", e);
    alert(message);
  }
  return <button onClick={handleClick}>{text}</button>;
}
