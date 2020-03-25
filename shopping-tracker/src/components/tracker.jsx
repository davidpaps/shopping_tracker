import React, { Component } from "react";

class Tracker extends Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    let classes = this.formatBadgeClass();

    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Tracker;
