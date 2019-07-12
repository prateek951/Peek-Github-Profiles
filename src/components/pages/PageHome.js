import React, { Fragment } from 'react';
import SearchBar from '../users/SearchBar';
import Users from '../users/Users';
const PageHome = () => {
  return (
    <div>
      <Fragment>
        <SearchBar />
        <Users />
      </Fragment>
    </div>
  );
};

export default PageHome;
