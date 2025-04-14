import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import AlertButton from "../button/AlertButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <AlertButton text="Click me!" />
    </Container>
  </StrictMode>
);
