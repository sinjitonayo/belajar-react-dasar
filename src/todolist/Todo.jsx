export default function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return <li>{isCompleted ? <s>{text}</s> : text}</li>;
  }
}
