import React, { Component } from "react";

import "./homepage.css";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <h1>Welcome!</h1>
        <p className="text">
          I like to create websites and web based application which works well
          everyware. <br /> Keep scrolling while I get a coffee for you...
        </p>
      </div>
    );
  }
}

export default Welcome;
