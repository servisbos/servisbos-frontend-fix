import React, { Component } from "react";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import Contents from "./Components/Contents";

class App extends Component {
  render() {
    return (
    <Router> 
      <div>
        <Header />,
        <Header /> 
    {/* <Contents />; */}
      </div>
      </Router>
  );


export default App;