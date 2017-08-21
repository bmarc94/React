import React from "react";
import { string, func } from "prop-types";

export default class TextField extends React.Component {
  static propTypes = {
    label: string,
    onClick:func
  };

  constructor(props){
    super(props)
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(){
    this.props.onClick && this.props.onClick(this);
  }

  render() {
    return (
      <button onClick={this._clickHandler}> {this.props.label}</button>
    );
  }
}
