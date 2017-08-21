import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./navBar.css";


/**
 * TODO: A Revoir de façon a ce que le composants gère la création des liens
 * Idée:  Un composant toolbar qui gère le header et un composant toolbarTitle et NavToolbar
 */

class NavBar extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fixed: PropTypes.bool,
  }


  render() {
    return (
      <header>
          {this.props.children}
      </header>
    );
  }
}
export default NavBar;