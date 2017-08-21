import React from "react";
import { string, func } from "prop-types";

export default class NameForm extends React.Component {
  static propTypes = {
    label: string,
    placeholder: string,
    id: string,
    value: string,
    onBlur: func
  };

  constructor(props) {
    super(props);
    this.state = { value: props.value };

    this._handleBlur = this._handleBlur.bind(this);
  }

  _handleBlur() {
    this.props.onBlur && this.props.onBlur(this);
  }

  render() {
    return (
      <div>
        <label>
          {this.props.label}{" "}
        </label>
        <input
          type="text"
          ref="textFieldElement"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onBlur={this._handleBlur}
        />
      </div>
    );
  }
}
