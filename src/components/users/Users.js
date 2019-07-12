import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../contexts/github/GithubContext';
const Users = ({ loading }) => {
  const { users } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Users;
