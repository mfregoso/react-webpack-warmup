import React, { Component } from "react";
import ReactDOM from "react-dom";

const Container = () => {
  return <h1>This h1 is from React</h1>;
};

ReactDOM.render(<Container />, document.getElementById("react"));
