import React, { Component } from "react";
import Count from "./count";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 },
      { id: 5, value: 4 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      count => count.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(count => (
          <Count key={count.id} count={count} onDelete={this.handleDelete}>
            <h4>Item #{count.id}</h4>
          </Count>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
