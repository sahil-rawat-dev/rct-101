
import { useState } from "react";
export default function App() {
  let [counter, setCounter] = useState(0);

 
  let cls;
  counter % 2 === 0 ? (cls = "green") : (cls = "red");
  const handle = (value) => {
    setCounter(counter + value);
  };
  const handleDouble = () => {
    setCounter(counter * 2);
  };
  return (
    <div className="App">
      <h1 className={cls}>Counter:{counter}</h1>
      <button
        onClick={() => {
          handle(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          handle(-1);
        }}
      >
        sub 1
      </button>
      <button onClick={handleDouble}>Double</button>
    </div>
  );
}
