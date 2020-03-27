import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import logo from "../images/logo.svg";
import confLogo from "../images/platziconf-logo.svg";
import astronaut from "../images/astronauts.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row align-items-center mx-auto">
          <div className="col-4 text-center">
            <img src={confLogo} alt="Logo" />
            <h2 className="font-weight-light">BADGES APP FOR YOU</h2>
            <p>The easiest way to start</p>
            <Link to="/badges" className="btn btn-primary">
              Start Now
            </Link>
          </div>

          <div className="col-8">
            <img src={astronaut} alt="Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
