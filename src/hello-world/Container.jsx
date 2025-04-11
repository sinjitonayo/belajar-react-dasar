export default function Container({ children }) {
  return (
    <div>
      <h1
        style={{
          color: "blue",
        }}
      >
        Hello World!
      </h1>
      {children}
      <p>This is a paragraph.</p>
    </div>
  );
}
