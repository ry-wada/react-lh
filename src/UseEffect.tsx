import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    console.log("count", count + 1);
  };
  useEffect(() => {
    console.log("useEffectが実行された");
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
export default App;
