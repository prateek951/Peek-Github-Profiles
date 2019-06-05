import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AppNavbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        <span /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// defaultProps
AppNavbar.defaultProps = {
  title: "Github Finder",
  icon: "fas fa-github"
};
// propTypes
AppNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default AppNavbar;
