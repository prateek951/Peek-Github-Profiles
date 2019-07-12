import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import AlertContext from '../../contexts/alert/AlertContext';
const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    <Fragment>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.message}
        </div>
      )}
    </Fragment>
  );
};

Alert.propTypes = {
  error: PropTypes.string.isRequired,
  closeAlert: PropTypes.func.isRequired
};

export default Alert;
