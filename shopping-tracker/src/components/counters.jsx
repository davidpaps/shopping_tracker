import React, { Component } from "react";
import Tracker from "./tracker";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(tracker => (
          <Tracker key={tracker.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
