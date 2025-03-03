import React from "react";
import Question from "./Questions";
import questions from "../types/questions";
import { useState } from "react";
import ScoreDialog from "./ScoreScreen";

const Quizz: React.FC = () => {
  const [currentQuestionIndex, setCurrnetQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [count, setCount] = useState<number>(0);
  const [showScoreDialog, setShowScoreDialog] = useState(false);

  function handleAnswerClick(index: number) {
    setSelectedAnswerIndex(index);
    const currentQuestion = questions[currentQuestionIndex];
    const correct = index === currentQuestion.correctAnswerIndex;

    setIsCorrect(correct);
    if (index === currentQuestion.correctAnswerIndex) {
      setCount(count + 1);
    }
    const newSelectedAnswer = [...selectedAnswer];
    newSelectedAnswer[currentQuestionIndex] = index;
    setSelectedAnswer(newSelectedAnswer);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrnetQuestionIndex(currentQuestionIndex + 1);
        setIsCorrect(null);
        setSelectedAnswerIndex(null);
      } else {
        setShowScoreDialog(true);
        setCount(0);
      }
    }, 1000);
  }
  function handleRestartQuiz() {
    setCurrnetQuestionIndex(0);
    setSelectedAnswer([]);
    setIsCorrect(null);
    setSelectedAnswerIndex(null);
    setShowScoreDialog(false);
  }
  return (
    <div id="quiz">
      <h2 id="question">
        Question Number {currentQuestionIndex + 1} Score: {count}/7
      </h2>
      <Question
        text={questions[currentQuestionIndex].text}
        answerlist={questions[currentQuestionIndex].answers}
        onAnswerClick={handleAnswerClick}
        isCorrect={isCorrect}
        selectedAnswerIndex={selectedAnswerIndex}
      />
      <ScoreDialog
        questions={questions}
        userAnswers={selectedAnswer}
        onRestartQuiz={handleRestartQuiz}
        isOpen={showScoreDialog}
      />
    </div>
  );
};

export default Quizz;
