import { createRoot } from "react-dom/client";

let seconds = 0;

const container = document.getElementById("root");
const root = createRoot(container);

const Counter = () => {
  const slots = seconds.toString().split("");
  return (
    <div style={{ display: "flex", gap: "10px", fontSize: "2rem" }}>
      {slots.map((digit, index) => (
        <div key={index} style={{ "border": "solid black 3px", marginRight: "16px", padding: "8px" }}>{digit}</div>
      ))}
    </div>
  );
};

const render = () => {
  root.render(<Counter />);
};

render();

setInterval(() => {
  seconds += 1;
  render();
}, 1000);
