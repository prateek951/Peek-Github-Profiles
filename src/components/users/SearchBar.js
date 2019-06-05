import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    this.bindEvents();
  }
  bindEvents() {
    this.handleStringChange = this.handleStringChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleStringChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSearch(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    const { term } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Enter a username to filter by"
            name="term"
            value={term}
            onChange={this.handleStringChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
