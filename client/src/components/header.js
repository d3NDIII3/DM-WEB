import React, { Component } from "react";
import "./header.css";


class Header extends Component {
  
  state = {};
  render() {
   
    return (
      <div className="header">
           <h1>Welcome!</h1>
           <p>I like to create websites and web based application which works well everyware. <br/>

Keep scrolling while I get a coffee for you...</p>
      </div>
    );
  }
}

export default Header;
