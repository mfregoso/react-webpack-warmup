import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to {this.props.title || "App Title"}!</h3>
      </div>
    );
  }
}

export default Welcome;
