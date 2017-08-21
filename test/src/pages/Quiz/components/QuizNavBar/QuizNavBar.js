import React from "react";
import { any } from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "../../../../components/NavBar";

export default class QuizNavBar extends React.Component {
  static propTypes = {
    match: any,
    quizData: any
  };

  render() {
    return (
      <NavBar
        children={this.props.quizData
          .map((quiz, i) => {
            return (
              <span key={"quizLink" + i}>
                <Link to={this.props.match.url + "/" + i}>
                  {quiz.title}
                </Link>
                {" | "}
              </span>
            );
          })
          .concat(
            <Link
              key={"quizCreatorLink"}
              to={this.props.match.url + "/creator"}
            >
              Create a new quiz
            </Link>
          )}
      />
    );
  }
}
