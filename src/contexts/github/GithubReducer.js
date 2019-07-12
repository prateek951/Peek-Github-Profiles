import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from '../../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SEARCH_USERS:
      return {
        ...state,
        users: action.users,
        loading: false
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.user,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.repos,
        loading: false
      };
    default:
      return state;
  }
};

export default GithubReducer;
