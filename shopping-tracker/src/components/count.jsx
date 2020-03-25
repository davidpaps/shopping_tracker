import React, { Component } from "react";

class Count extends Component {
  state = {
    value: this.props.value,
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
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
        {this.state.tags.length === 0 && ""}
        {this.formatTags()}
      </React.Fragment>
    );
  }

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Count;
