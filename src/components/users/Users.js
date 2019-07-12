import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../contexts/github/GithubContext';
const Users = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Spinner />;
  } else if (!users) {
    return (
      <h1>
        We were unable to find profiles that resemble closely with the provided
        userid
      </h1>
    );
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

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Users;
