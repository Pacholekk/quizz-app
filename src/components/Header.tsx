import React from "react";
import logo from "../assets/quiz-logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <h1>
        React Quizz ! <img src={logo} alt="quizz logo" />
      </h1>
    </header>
  );
};

export default Header;
