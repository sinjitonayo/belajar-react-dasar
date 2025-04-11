export function HeaderHelloWorld({ text = "Hello World!" }) {
  return (
    <h1
      style={{
        color: "blue",
      }}
    >
      {text.toUpperCase()}
    </h1>
  );
}

export function ParagraphHelloWorld() {
  const text = "This is a paragraph.";
  return <p>{text.toUpperCase()}</p>;
}

export default function HelloWorld() {
  const props = {
    text: "Hello World!",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}
