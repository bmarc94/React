import React from "react";
import { Link } from "react-router-dom";

import QuizData from "../../quizData";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Buttons";

import { QuestionEditor } from "../";

/**
 * TODO :
 * - Verification des entrées
 * - Redirection via bouton enregistrer (Ajout d'un mock pour simuler le serveur)
 * - Ajouter le comportement pour add une question
 * - Ajouter le comportement pourvalider une bonne réponse
 */

export default class QuizCreator extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.newQuizData = {};

    this.onTitleBlur = this.onTitleBlur.bind(this);
    this.updateQuizTitle = this.updateQuizTitle.bind(this);
    this.save = this.save.bind(this);
  }

  onTitleBlur(textField) {
    this.updateQuizTitle(textField.refs.textFieldElement.value);
  }

  updateQuizTitle(value) {
    this.newQuizData.title = value;
  }

  addQuestion() {
    alert("Work in progress");
  }

  save() {
    let newQuizData = this.newQuizData;
    newQuizData.title &&
      newQuizData.title !== "" &&
      /*newQuizData.question &&
      newQuizData.question.lenght > 0 &&*/
      QuizData.push(newQuizData);
  }

  render() {
    return (
      <div>
        <h1>
          <TextField
            required
            placeholder="Titre du Quiz"
            label="Titre du Quiz"
            onBlur={this.onTitleBlur}
          />
        </h1>
        <QuestionEditor />
        <br />
        <Button label="Ajouter une questions" onClick={this.addQuestion} />
        <hr />
        <Link to={"/quiz"}>
          <Button label="Enregistrer le quiz" onClick ={this.save}>Enregistrer</Button>
        </Link>
      </div>
    );
  }
}
