import { SEARCH_USERS } from '../../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: state.users.filter(user => user.username.includes(action.term))
      };

    default:
      return state;
  }
};

export default GithubReducer;
