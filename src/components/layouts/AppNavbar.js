import React, { Component } from "react";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  //defaultProps
  static defaultProps = {
    title: "Github Finder",
    icon: "fas fa-github"
  };
  // propTypes
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const { title, icon } = this.props;
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} />
          <span /> {title}
        </h1>
      </nav>
    );
  }
}

// Setup the default props if the component does not receive any props
// it will make use of the default props

// AppNavbar.defaultProps = {
//   title: "GithubProfile",
//   icon: "fab fa-github"
// };

AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default AppNavbar;
