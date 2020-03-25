import React, { Component } from "react";
import Count from "./count";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(count => (
          <Count key={count.id} value={count.value} />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
