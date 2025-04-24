import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(false);

  function handleChange(e) {
    setShow2(e.target.checked);
    console.log("Checkbox changed:", e.target.checked);
  }

  return (
    <div>
      <h1>Counter App</h1>
      {show2 ? <Counter name={"Tanaka"} /> : <Counter name={"Yamada"} />}
      <label>
        <input type="checkbox" checked={show2} onChange={handleChange} />
        Show second counter
      </label>
    </div>
  );
}
