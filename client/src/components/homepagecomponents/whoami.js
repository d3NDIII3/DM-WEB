import React from "react";
import { Spring } from "react-spring/renderprops";
import "./whoami.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Whoami() {
  Aos.init({
    duration: 2000,
  });
  return (
    <Spring
      from={{ opacity: "0" }}
      to={{ opacity: "1" }}
      config={{ delay: 500, duration: 1000 }}
    >
      {(props) => (
        <div style={props} className="section1">
          <h1 data-aos={"fade-in"}>Who am I?</h1>
          <p data-aos={"fade-in"} className="text2">
            My name is Deniz <br /> I studied Computer Science and Informatics
            bachelor degree in University of Economics - Varna. I've been
            creating web apps and desktop apps since early 2018s. <br /> I enjoy
            creating tools that solve everyday problems.
            <br />
          </p>

          <ul data-aos={"fade-right"}>
            <h2>My experience is around</h2>
            <li> Using Node.js - express to build backends (REST APIs).</li>
            <li> My favorite is creating React JS frontend apps.</li>
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
      )}
    </Spring>
  );
}
