import React, { Component } from "react";

class Tracker extends Component {
  state = {
    count: 0,
    tags: []
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.formatBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && ""}
        {this.formatTags()}
      </React.Fragment>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  formatTags() {
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
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
