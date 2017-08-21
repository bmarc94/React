import React from "react";
import { Route } from "react-router-dom";

import Quiz from "../../components/Quiz";

import { QuizList } from "./components";
import { QuizCreator } from "./components";
import { QuizNavBar } from "./components";

import quizData from "./quizData";

import "./quiz.css";

const QuizPage = ({ match }) =>
  <div className="quizPageContent">
    <QuizNavBar quizData={quizData} match={match} />
    <Route exact path={match.url} render={() => <QuizList />} />
    <Route path={match.url + "/:quizId"} component={RenderQuiz} />
    <Route strict exact path={match.url + "/creator"} component={QuizCreator} />
  </div>;

export default QuizPage;

/**Temporary */

const RenderQuiz = ({ match }) => {
  /**TODO: revoir impérativemnent les data */
  let quizId = match.params.quizId;
  return quizData[quizId]
    ? <Quiz id={quizId} {...quizData[quizId]} />
    : <span />;
};
