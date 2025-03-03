import React from "react";

interface QuestionProps {
  text: string;
  answerlist: string[];
  onAnswerClick: (index: number) => void;
  isCorrect: boolean | null;
  selectedAnswerIndex: number | null;
}

const Question: React.FC<QuestionProps> = ({
  text,
  answerlist,
  onAnswerClick,
  isCorrect,
  selectedAnswerIndex,
}) => {
  return (
    <div id="question">
      <h2>{text}</h2>
      <ul className="no-bullets" id="answers">
        {answerlist.map((answer, index) => (
          <li key={index} className="answer">
            <button
              className={
                selectedAnswerIndex === index && isCorrect !== null
                  ? isCorrect
                    ? "correct"
                    : "wrong"
                  : ""
              }
              onClick={() => onAnswerClick(index)}
              disabled={selectedAnswerIndex !== null}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
