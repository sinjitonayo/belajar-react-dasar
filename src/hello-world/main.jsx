import { createRoot } from "react-dom/client";
import { HeaderHelloWorld, ParagraphHelloWorld } from "./HelloWorld";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeaderHelloWorld />
    <ParagraphHelloWorld />
  </StrictMode>
);
