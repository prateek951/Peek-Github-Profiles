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
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    clearUsers: PropTypes.func.isRequired
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
    const { term } = this.state;
    if (term === "" ||  term.trim().length === 0) {
      this.props.setAlert("Please specify a github handle", "danger");
    } else {
      this.props.searchUsers(term);
      this.setState({ term: "" });
    }
  }
  render() {
    const {
      state: { term },
      props: { show, clearUsers }
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
            value="Search"
          />
        </form>
        {show && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default SearchBar;
