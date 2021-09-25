import { useEffect, useState } from "react";
import "./App.css";
import Books from "./components/Books/Books";
import Device from "./components/Device/Device";

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: "Small Giants", author: "bo" },
    { name: "Build to Sell", author: "john" },
    { name: "Dev Guide", author: "steve" },
    { name: "Animal Planet", author: "ryans" },
  ];

  const handleIncreaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="phone" steps={steps} price="13000"></Device>
      <Books books={books} />
    </div>
  );
}

export default App;
