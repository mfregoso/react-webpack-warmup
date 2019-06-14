import React, { Component } from "react";
import People from "./People";
import Filters from "./InputFilters";
import * as Actions from "../actions/index";
import { connect } from "react-redux";

const Welcome = (props) => {
  return (
    <div>
      <h3 className="title">Redux Thunk Search</h3>
      <button onClick={() => props.refreshPeople()}>Refresh</button>
      <p />
      <div style={{ width: "100%" }}>
        <div style={{ width: "35%", float: "left" }}>
          <Filters />
        </div>
        <div style={{ width: "60%", float: "right" }}>
          <People />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    refreshPeople: () => {
      dispatch(Actions.refreshPeople());
    }
  }
};

export default connect(null, mapDispatchToProps)(Welcome);