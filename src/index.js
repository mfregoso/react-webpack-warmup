import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "./store/store";
import Welcome from "./components/Welcome";
import "./styles/people.less";
require('file-loader?name=[name].[ext]!../index.html');

ReactDOM.render(
  <Provider store={Store}>
    <Welcome />
  </Provider>,
  document.getElementById("react")
);
