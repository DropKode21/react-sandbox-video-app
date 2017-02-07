import React, { Component } from 'react';
class SearchBar extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.doSearch(this.refs['filterTextInput'].value);
  }

  render() {
    return (

          <form>
              <input
                  className="searchBar"
                  type="text"
                  placeholder="Search..."
                  value={this.props.searchText}
                  ref="filterTextInput"
                  onChange={this.handleChange}
              />

          </form>
    );
  }
}

export default SearchBar;

