import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookInput";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}, Message: ${message}`);
    setName("");
    setMessage("");
    nameInput.current.focus();
  }

  return (
    <>
      <h1>Guest Book</h1>
      <GuestBookForm name={name} setName={setName} ref={nameInput} />
      <br />
      <label htmlFor="message">Message:</label>
      <br />
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
