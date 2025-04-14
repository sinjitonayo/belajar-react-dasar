import Row from "./Row";

export default function Table() {
  return (
    <table border={1}>
      <tbody>
        <Row id={1} text="Learn React" />
        <Row id={2} text="Learn Vite" />
        <Row id={3} text="Learn JavaScript" />
        <Row id={4} text="Learn CSS" />
      </tbody>
    </table>
  );
}
