export default function GuestBookForm({ name, setName, ref }) {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={ref}
      />
    </>
  );
}
