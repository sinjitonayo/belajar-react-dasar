import { useState } from "react";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useState(initialData);

  function handleNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }

  function handleMessageChange(e) {
    setContact({ ...contact, message: e.target.value });
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <label>
          Name:
          <input type="text" value={contact.name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={contact.message} onChange={handleMessageChange} />
        </label>
      </form>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Message:</strong> {contact.message}
      </p>
      <button
        onClick={() => {
          setContact(initialData);
        }}
      >
        Reset
      </button>
    </div>
  );
}
