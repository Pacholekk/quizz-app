import React from "react";
import { Questions } from "../types/questions";

interface ScoreDialogProps {
  questions: Questions[];
  userAnswers: number[];
  onRestartQuiz: () => void;
  isOpen: boolean;
}

const ScoreDialog: React.FC<ScoreDialogProps> = ({
  questions,
  userAnswers,
  onRestartQuiz,
  isOpen,
}) => {
  if (!isOpen) return null;

  // Oblicz liczbę poprawnych odpowiedzi
  const correctAnswersCount = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswerIndex
  ).length;

  // Oblicz procent poprawnych odpowiedzi
  const percentage = Math.round((correctAnswersCount / questions.length) * 100);

  return (
    <div id="summary">
      <div id="summary" className="dialog">
        <h2>Quiz Completed!</h2>

        <div id="summary-stats">
          <p>
            <span className="number">{correctAnswersCount}</span>
            <span className="text">correct answers</span>
          </p>
          <p>
            <span className="number">{questions.length}</span>
            <span className="text">questions</span>
          </p>
          <p>
            <span className="number">{percentage}%</span>
            <span className="text">success rate</span>
          </p>
        </div>

        <ol>
          {questions.map((question, index) => (
            <li key={question.id}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              <p
                className={`user-answer ${
                  userAnswers[index] === question.correctAnswerIndex
                    ? "correct"
                    : "wrong"
                }`}
              >
                {userAnswers[index] !== undefined
                  ? question.answers[userAnswers[index]]
                  : "Not answered"}
              </p>
            </li>
          ))}
        </ol>

        <button onClick={onRestartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default ScoreDialog;
