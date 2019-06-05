import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PageUser extends Component {
  static propTypes = {
    prop: PropTypes
  };
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
