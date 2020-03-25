import React, { Component } from "react";

class Tracker extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
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
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please enter a tag"}
        {this.formatTags()}
      </React.Fragment>
    );
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
  }

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
