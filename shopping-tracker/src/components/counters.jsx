import React, { Component } from "react";
import Tracker from "./tracker";

class Counters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
      </React.Fragment>
    );
  }
}

export default Counters;
