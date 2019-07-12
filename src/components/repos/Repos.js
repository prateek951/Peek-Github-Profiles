import React, { useContext } from 'react';
// import PropTypes from "prop-types";
import GithubContext from '../../contexts/github/GithubContext';
import RepoItem from './RepoItem';
const Repos = () => {
  const { repos } = useContext(GithubContext);
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

// Repos.propTypes = {
//   repos: PropTypes.array.isRequired
// };

export default Repos;
