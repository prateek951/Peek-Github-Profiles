import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PageUser extends Component {
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    const {
      getUser,
      match: {
        params: { id }
      }
    } = this.props;
    getUser(id);
  };

  render() {
    const { user } = this.props;
    return <div>{user.login}</div>;
  }
}
