import React, { Component } from 'react';

class Filter extends Component {
  state = {};
  render() {
    return (
      <input
        type="text"
        id="filter"
        name="filter"
        className="filter-input"
        placeholder="Search contacts..."
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default Filter;
