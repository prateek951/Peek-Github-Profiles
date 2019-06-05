import React, { Component } from "react";
import UserItem from "./UserItem";
class Users extends Component {
  render() {
    const { users, loading } = this.props;
    return (
      <div style={userStyle}>
        {users && !loading ? (
          users.map(user => <UserItem key={user.id} user={user} />)
        ) : (
          <h1 className="text-center">Loading...</h1>
        )}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
