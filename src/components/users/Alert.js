import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Alert = ({ error, closeAlert }) => (
  <Fragment>
    {error ? (
      <h2 className="text-center alert-primary">
        {error}{" "}
        <span className="btn btn-danger" onClick={closeAlert}>
          X
        </span>
      </h2>
    ) : null}
  </Fragment>
);

Alert.propTypes = {
  error: PropTypes.string.isRequired,
  closeAlert: PropTypes.func.isRequired
};

export default Alert;
