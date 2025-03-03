import React from "react";
import questions from "../types/questions.ts";

const Question: React.FC = () => {
  // Używanie konkretnych właściwości obiektu, a nie całego obiektu
  return (
    <div className="answer">
      <h2>{questions[0].text}</h2>
      <ul className="no-bullets">
        {questions[0].answers.map((answer, index) => (
          <li key={index}>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
