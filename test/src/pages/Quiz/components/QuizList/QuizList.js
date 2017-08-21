import React from "react";
import { Link } from "react-router-dom";

import quizData from "../../quizData";

const QuizList = ({ match }) => {
  return (
    <ul>
      {quizData.map((quiz, i) => {
        return (
          <li key={"quizList_" + i}>
            <Link to={"quiz/" + i}>
              {quiz.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default QuizList;
