import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "./store/store"
import Welcome from "./components/Welcome";
import "./styles/people.less";

ReactDOM.render(
  <Provider store={Store}>
    <Welcome title="App" />
  </Provider>,
  document.getElementById("react")
);
