import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MenuItem from "./components/MenuItem";
import menu from "./menu";
import "./App.css";

class App extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <Router>
          <div>
            <div className="main">
              <div className="nav-bar">
                {menu.map(item => {
                  return (
                    <MenuItem
                      name={item.name}
                      link={item.link}
                      className="nav-item"
                    />
                  );
                }, this)}
              </div>
            </div>

            <main>
              {menu.map(item => {
                return (
                  <Route exact path={item.link} component={item.component} />
                );
              })}
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
