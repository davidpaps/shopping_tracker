import React, { Component } from "react";
import Count from "./count";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onReduction,
      counters
    } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(count => (
          <Count
            key={count.id}
            count={count}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReduction={onReduction}
          >
            <h6>Item #{count.id}</h6>
          </Count>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
