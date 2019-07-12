import React, { useState, useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';
import AlertContext from '../../contexts/alert/AlertContext';
const SearchBar = () => {
  const { setAlert } = useContext(AlertContext)
  const [term, setTerm] = useState('');
  const handleStringChange = event => {
    setTerm(event.target.value);
  };
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleSearch = event => {
    event.preventDefault();
    if (term === '' || term.trim().length === 0) {
      setAlert('Please specify a github handle', 'danger');
    } else {
      searchUsers(term);
      setTerm('');
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
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};


export default SearchBar;
