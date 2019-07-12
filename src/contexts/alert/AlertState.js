import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../../types';
const AlertState = props => {
  // 1. Create the initial state
  /**
   * @desc Initial Github State
   */
  const initialState = null;

  // 3. Create all the actions related to the Github State
  /**
   * @desc Actions go here
   */

  // Set the alert
  const setAlert = (alertMessage, type) => {
    // setLoading(false);
    // setAlert(true);
    dispatch({ type: SET_ALERT, payload: { message: alertMessage, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // 2. Make use of the useReducer hook since we will dispatch the actions
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // 4. Return the Provider which will wrap the entire application

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
