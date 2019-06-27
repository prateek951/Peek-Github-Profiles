import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchUsers, setAlert, show, clearUsers }) => {
  const [term, setTerm] = useState("");
  const handleStringChange = event => {
    setTerm(event.target.value);
  };
  const handleSearch = event => {
    event.preventDefault();
    if (term === "" || term.trim().length === 0) {
      setAlert("Please specify a github handle", "danger");
    } else {
      searchUsers(term);
      setTerm("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a username to filter by"
          name="term"
          value={term}
          onChange={handleStringChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {show && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  clearUsers: PropTypes.func.isRequired
};

export default SearchBar;
