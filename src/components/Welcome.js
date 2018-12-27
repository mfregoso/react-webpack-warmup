import React, { Component } from "react";
import MLogo from "../img/m_logo.png";

class Welcome extends Component {
  render() {
    return (
      <div>
        <img src={MLogo} />
        <h3>Welcome to {this.props.title || "App Title"}!</h3>
      </div>
    );
  }
}

export default Welcome;
