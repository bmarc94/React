import React from "react";
import { string, func, number } from "prop-types";

import Card from "./Card";

export default class ThreeCardMonte extends React.Component {
  static propTypes = {
    length: number,
    onClick: func,
    onShuffleEnd: func,
    afterSelection: func
  };
  static defaultProps = {
    length: 3
  };

  constructor(props) {
    super(props);
    this.isAnimated = false;
    this.onCardSelection = this.onCardSelection.bind(this);
    this._animationEndHandler = this._animationEndHandler.bind(this);
  }

  componentDidMount() {
    let cardContainer = this.refs.cardContainer;
    this.isAnimated = true;
    this.selectedId = null;
    cardContainer.className = cardContainer.className + " animated";
    cardContainer.addEventListener("animationend", () => {
      this._animationEndHandler();
    });
  }

  renderCard() {
    var cardEl = [];
    for (var i = 0; i < this.props.length; i++) {
      cardEl.push(
        <Card key={i} ref={i} id={i} onClick={this.onCardSelection} />
      );
    }
    return cardEl;
  }

  onCardSelection(card) {
    if (!this.isAnimated && this.selectedId === null) {
      this.selectedId = card.id;
      card.selected = true;
      this.props.afterSelection && this.props.afterSelection(card);
    }
  }

  _animationEndHandler() {
    if (this.isAnimated) {
      this.isAnimated = false;
      this.props.onShuffleEnd && this.props.onShuffleEnd();
    }
  }

  render() {
    return (
      <div ref="cardContainer" className="threeCardMonte">
        {this.renderCard()}
      </div>
    );
  }
}
