import React, { Component } from "react";
import Header from "../Header";
import ContentHomepage from "../ContentHomepage";
import Footer from "../Footer";

import "./App.css";

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <div className="layer" />

        <Header />
        <ContentHomepage />
        <Footer />
        <div id="toTop" />
      </div>
    );
  }
}

export default Homepage;
