import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
  GET_USER,
  GET_REPOS,
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING
} from '../../types';
const GithubState = props => {
  // 1. Create the initial state
  /**
   * @desc Initial Github State
   */
  const initialState = {
    repos: [],
    users: [],
    user: {},
    loading: false
  };

  // 3. Create all the actions related to the Github State
  /**
   * @desc Actions go here
   */

  const searchUsers = async term => {
    console.log('Getting the list of the users');
    setLoading();
    const {
      data: { items: users }
    } = await axios.get(
      `https://api.github.com/search/users?q=${term}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, users: users });
  };
  // Utility method to get a single github user
  const getUser = async username => {
    setLoading();
    const { data: user } = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(data);
    dispatch({ type: GET_USER, user: user });
  };
  const getRepos = id => console.log('Getting the entire list of the repos');
  const clearUsers = () => {
    console.log('Clearing up the users');
    dispatch({ type: CLEAR_USERS });
  };
  const setLoading = () => {
    console.log('Setting the loading thing');
    dispatch({ type: SET_LOADING });
  };
  // 2. Make use of the useReducer hook since we will dispatch the actions
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // 4. Return the Provider which will wrap the entire application

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        setLoading,
        getRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
