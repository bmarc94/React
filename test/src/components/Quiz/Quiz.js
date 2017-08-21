import React from "react";
import { string, any } from "prop-types";
import Question from "../Question/Question";
import ChoiceList from "../ChoiceList/ChoiceList";


/**
 * Revoir le système de validation et la propagation des props/states/ref entre les composants
 */

export default class Quiz extends React.Component {
  static propTypes = {
    submitButtonText: string,
    questions: any,
    id:string,
    title:string
  };

  static defaultProps = {
    submitButtonText: "Validate",
    questions: [
      {
        title: "Avez-Vous oublié la listes des questions ?",
        singleChoice: true,
        assignment: "assigmenent",
        choices: [
          { title: "Oui", goodAnswer: true },
        ]
      }
    ]
  };

  _handleChange() {
    this.props.onChange && this.props.onChange(this);
  }

  validate(e){
  }


  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
          {this.props.questions.map((question, i) => {
            var prefixId = this.props.id + "Question" + i;
            return (
              <div key={prefixId}>
                <Question 
                id={prefixId} 
                {...question} /*Sale à revoir */
                 />
                <ChoiceList
                  ref={prefixId + "_choiceList"}
                  id={prefixId + "_choice"}
                  {...question} /*Sale à revoir */
                  choices={question.choices.map(choice => choice.title)}
                  
                />
              </div>
            );
          })}
          <button onClick={this.validate.bind(this)}>
            {this.props.submitButtonText}
          </button>
      </div>
    );
  }
}
