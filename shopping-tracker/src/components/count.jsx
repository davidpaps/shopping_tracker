import React, { Component } from "react";

class Count extends Component {
  state = {
    tags: []
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.formatBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.count)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onReduction(this.props.count)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.count.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {this.state.tags.length === 0 && ""}
        {this.formatTags()}
      </React.Fragment>
    );
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
    classes += this.props.count.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.count;
    return value === 0 ? "Zero" : value;
  }
}

export default Count;
