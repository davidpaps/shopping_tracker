import React, { Component } from "react";
import Count from "./count";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(count => (
          <Count
            key={count.id}
            count={count}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            <h4>Item #{count.id}</h4>
          </Count>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
