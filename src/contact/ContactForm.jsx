import { useImmer } from "use-immer";

const initialData = {
  name: "",
  message: "",
};

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData);

  function handleNameChange(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
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
