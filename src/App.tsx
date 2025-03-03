import { useState } from "react";
import Quizz from "./components/Quizz";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Quizz />
    </>
  );
}

export default App;
