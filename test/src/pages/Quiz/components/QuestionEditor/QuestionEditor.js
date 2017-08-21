import React from "react";
import { any } from "prop-types";

import TextField from "../../../../components/TextField";
import Button from "../../../../components/Buttons";

let labelStart = "Choix ";

export default class QuestionEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [
        {
          placeholder: "Votre Choix...",
          value: "",
          label: labelStart + "1"
        },
        {
          placeholder: "Votre Choix...",
          value: "",
          label: labelStart + "2"
        }
      ]
    };

    this.addChoice = this.addChoice.bind(this);
  }

  addChoice() {
    this.setState(() =>
      this.state.choices.push({
        placeholder: "Votre Choix...",
        value: "",
        label: labelStart + (this.state.choices.length + 1)
      })
    );
  }

  render() {
    return (
      <div>
          <TextField label="Question" placeholder="Votre choix" />
        {this.state.choices.map((choice, i) => {
          return <TextField key={"choice_" + i} {...choice} />;
        })}
        <Button onClick={this.addChoice} label="Ajouter un choix" />
      </div>
    );
  }
}
