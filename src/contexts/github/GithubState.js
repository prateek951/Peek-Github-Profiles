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

  const searchUsers = term => {
    console.log('Getting the list of the users');
    dispatch({ type: SEARCH_USERS, term: term });
  };
  const getUser = id => console.log('Getting the user');
  const getRepos = id => console.log('Getting the entire list of the repos');
  const clearUsers = () => console.log('Clear the list of all the users');
  const setLoading = () => console.log('Setting the loading thing');
  // 2. Make use of the useReducer hook since we will dispatch the actions
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // 4. Return the Provider which will wrap the entire application

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
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
