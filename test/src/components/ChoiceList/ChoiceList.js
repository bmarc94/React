import React from "react";
import { string, func, bool, array } from "prop-types";
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";

export default class ChoiceList extends React.Component {
  static propTypes = {
    id: string,
    onChange: func,
    label: string,
    children: array,
    singleChoice: bool,
    choices: array
  };

  static defaultProps = {
    singleChoice: false,
    choices: ["Choix 1", "Choix 2"]
  };

  constructor(props) {
    super(props);
    this.renderChildren = this._initChildrenCallBack();
  }
  
  _handleChange() {
    this.props.onChange && this.props.onChange(this);
  }

  _initChildrenCallBack(singleChoice) {
    let componenent = this.props.singleChoice ?  Radio : Checkbox;

    return () => {
      return this.props.choices.map((child, i) => {
        return React.createElement(componenent, {
          key:this.props.id + "_" + i,
          id: this.props.id + "_" + i,
          ref:this.props.id + "_"+ i,
          text: child,
          groupName: this.props.id + "_group",
          onChange: component => {
            /*alert(component.props.id + " change d'état!");*/
          }
        });
      });
    };
  }

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }
}

