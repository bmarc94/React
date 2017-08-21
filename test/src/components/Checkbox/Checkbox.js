import React from "react";
import { string, func, bool } from "prop-types";

export default class Checkbox extends React.Component {
  static propTypes = {
    id: string,
    onChange: func,
    text: string,
    checked: bool
  };

  constructor(props){
    super(props)
    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange() {
    this.props.onChange && this.props.onChange(this);
  }

  render() {
    return (
      <div>
        <input type="checkbox" id={this.props.id} onChange={this._handleChange}
        />
        <label htmlFor={this.props.id}>
          {this.props.text}
        </label>
      </div>
    );
  }
}
