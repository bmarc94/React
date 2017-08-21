import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import QuizPage from "./pages/Quiz";
import ThreeCardMonteGame from "./pages/ThreeCardMonteGame";

import NavBar from "./components/NavBar";


const Routes = [
  { path: "/", exact: true, title: "HOME", component: Home },
  { path: "/ThreeCardMonteGame", title: "Three Card Monte Game", component: ThreeCardMonteGame },
  { path: "/Quiz", title: "Quiz", component: QuizPage },
];

class App extends Component {
  renderLinks() {
    return Routes.map((route, i) => {
      return (
        <span key={"AppLink_" + i}>
          <Link to={route.path}>
            {route.title}
          </Link>
          {Routes.length - 1 > i ? " | " : ""}
        </span>
      );
    });
  }

  renderRoutes() {
    return Routes.map((route, i) => {
      return <Route key={"AppRoute_" + i} {...route} />;
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar children={this.renderLinks()} />
            {this.renderRoutes()}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
