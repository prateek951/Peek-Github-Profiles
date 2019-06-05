import React from "react";
import PropTypes from "prop-types";

const AppNavbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        <span /> {title}
      </h1>
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
