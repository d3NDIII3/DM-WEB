import React, { Component } from "react";
import NestedGrid from "./grid.js";
import "./github.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@material-ui/icons/GitHub";
class Repos extends Component {
  state = {};
  render() {
    Aos.init({
      duration: 2000,
    });
    return (
      <div className="repos">
        <div data-aos={"fade-down"} className="head">
          <h2 id="h2">
            <GitHubIcon id={"giticon"} />
            Featured GitHub repositories <br /> A collection of repositories I
            maintain or contribute to
          </h2>
        </div>

        <NestedGrid />
      </div>
    );
  }
}

export default Repos;
