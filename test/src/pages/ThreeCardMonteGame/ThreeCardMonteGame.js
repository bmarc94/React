import React from "react";
import { string, func } from "prop-types";
import { Link } from "react-router-dom";

import ThreeCardMonte from "./components/ThreeCardMonte";

import XMLHttpRequestPromise from "../../utils/XMLHttpRequestPromise";

import "./threeCardMonteGame.css";

export default class ThreeCardMonteGame extends React.Component {
  static propTypes = {
    length: string
  };

  constructor(props) {
    super(props);
    this.state = {
      gameLog: "Mélange"
    };
    this.selectedCard;
    this.validate = this.validate.bind(this);
    this.onGameEnd = this.onGameEnd.bind(this);
    this.reset = this.reset.bind(this);
  }

  onGameEnd(card) {
    this.selectedCard = card;
    XMLHttpRequestPromise({
      url:
        "https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new"
    })
      .then(res => {
        this.validate(parseFloat(res));
      })
      .catch(() => {
        window.setTimeout(() => {
          this.validate(parseFloat(this.localRandom()));
        }, 1500);
      });
  }

  localRandom() {
    /*TODO: un vrai random... */
    return 0;
  }
  log(value) {
    this.setState({ gameLog: value });
  }

  validate(winId) {
    let selectedCardId = this.selectedCard.props.id;
    if (parseFloat(winId) === parseFloat(selectedCardId)) {
      this.selectedCard.expected = true;
      this.log("Gangé !");
    } else {
      this.selectedCard.expected = false;
      this.refs.cardContainer.refs[winId].expected = true;
      this.log("Perdu !");
    }
    this.setState({ gameOver: true });
  }

  reset() {
    /**Tout pourri mais ca fera l'affaire en attendant que je refactor...*/
    window.location = window.location;
  }

  render() {
    return (
      <div className="threeCardMonte">
        <ThreeCardMonte
          ref="cardContainer"
          afterSelection={this.onGameEnd}
          onShuffleEnd={() => this.log("Faites vos Jeux")}
        />
        <span className="bonneteauLog">{this.state.gameLog}</span> <br />
        {this.state.gameOver
          ? <button onClick={this.reset}>Recommencer</button>
          : ""}
      </div>
    );
  }
}
