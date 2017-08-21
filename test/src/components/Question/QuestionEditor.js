import React from "react";
import { string } from "prop-types";

export default class NameForm extends React.Component {
  static propTypes = {
    label: string,
    placeholder: string,
    id: string,
    value: string
  };

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }



  render() {
    return (
      <div>
        <label>{this.props.label} </label>
          <input type="text" placeholder={this.props.placeholder} value={this.state.value}  />
      </div>
    );
  }
}
