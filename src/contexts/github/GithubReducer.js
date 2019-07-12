import { SEARCH_USERS, SET_LOADING } from '../../types';

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

    default:
      return state;
  }
};

export default GithubReducer;
