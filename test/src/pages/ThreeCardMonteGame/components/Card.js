import React from "react";
import { string, func, number, bool } from "prop-types";

export default class Card extends React.Component {
  static propTypes = {
    id: number,
    length: number,
    className: string,
    onClick: func
  };

  constructor(props) {
    super(props);
    this._clickHandler = this._clickHandler.bind(this);
    this._computeClassName = this._computeClassName.bind(this);
    this.state = {
      selected: false,
      expected: null
    };
  }

  set selected(value) {
    this.setState({ selected: value });
  }
  set expected(value) {
    this.setState({ expected: value });
  }

  _computeClassName() {
    let { selected, expected } = this.state;
    return (
      "card" +
      (selected ? " selected" : "") +
      (expected ? " expected" : "") +
      (expected && selected ? " correct" : "") +
      (expected !== null && !expected && selected ? " wrong" : "")
    );
  }

  _clickHandler() {
    this.props.onClick && this.props.onClick(this);
  }

  render() {
    return <div className={this._computeClassName()} onClick={this._clickHandler} />;
  }
}
