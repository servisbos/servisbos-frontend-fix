import React, { Component } from "react";

import { Link } from "react-router-dom";
import { BrowserRouter as Router /*Route*/ } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./users/Components/Header";
import Contents from "./users/Components/Contents";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Contents />;
        </div>
      </Router>
    );
  }
}

export default App;
