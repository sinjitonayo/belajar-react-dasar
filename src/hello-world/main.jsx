import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <AlertButton text="Click me!" message={"Whatsapp"} />
      <MyButton text="Smash!" onSmash={() => alert("Smash!")} />
      <Toolbar
        onClick={(e) => e.stopPropagation() || alert("Toolbar button clicked!")}
      ></Toolbar>
      <SearchForm />
      <Counter />
    </Container>
  </StrictMode>
);
