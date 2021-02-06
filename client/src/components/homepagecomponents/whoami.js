import React, { Component } from "react";
import "../homepagecomponents/whoami.css";

class Whoami extends Component {
  state = {};
  render() {
    return (
      <div className="section1">
        <h1>Who am I?</h1>
        <p className="text2">
          My name is Deniz <br /> I studied Computer Science and Informatics
          bachelor degree in University of Economics - Varna. I've been creating
          web apps and desktop apps since early 2018s. <br /> I enjoy creating
          tools that solve everyday problems.
          <br />
        </p>

        <ul>
          <h3>My experience</h3>
          <li> Using Node.js - express to build backends (REST APIs).</li>
          <li> Creating React JS frontend apps.</li>
          <li>
            Using PHP and jQuery to build backends for dynamic web content.
          </li>
          <li>Using Bootstrap and Material UI to build designs faster.</li>
          <li>Using Java and C# to build desktop applications.</li>
          <li>
            Databases with which I have experience MySQL, SQLite and Firebase
            Cloud Firestore
          </li>
        </ul>
        <br />
      </div>
    );
  }
}

export default Whoami;
