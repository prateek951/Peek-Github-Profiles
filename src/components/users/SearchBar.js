import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    this.bindEvents();
  }
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

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
    const {
      state: { term },
      props: { show }
    } = this;
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
        {show && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default SearchBar;
