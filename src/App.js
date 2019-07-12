import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import AppNavbar from './components/layouts/AppNavbar';
import Users from './components/users/Users';
import SearchBar from './components/users/SearchBar';
import Alert from './components/users/Alert';
import PageAbout from './components/pages/PageAbout';
import PageUser from './components/pages/PageUser';
import GithubState from './contexts/github/GithubState';
const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState('');
  // Utility method to search the users
  // const searchUsers = async term => {};
  // // Utility method to get a single github user
  // const getUser = async username => {
  //   setLoading(true);
  //   try {
  //     const { data: user } = await axios.get(
  //       `https://api.github.com/users/${username}?&client_id=${
  //         process.env.REACT_APP_GITHUB_CLIENT_ID
  //       }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //     );
  //     // console.log(data);
  //     setLoading(false);
  //     setCurrentUser(user);
  //   } catch (ex) {
  //     console.log(ex);
  //     setLoading(false);
  //     setCurrentUser({});
  //   }
  // };
  // Utility method to get a single user's repositories
  const getRepos = async username => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(data);
      setLoading(false);
      setRepos(data);
    } catch (ex) {
      console.log(ex);
      setLoading(false);
      setRepos([]);
    }
  };

  // Utility method to clear the users

  // const clearUsers = () => {
  //   // console.log("inside the clearUsers method");
  //   setLoading(false);
  //   setUsers([]);
  // };

  // Utility method to set the alert

  const showAlert = alertMessage => {
    setLoading(false);
    setError(alertMessage);
    setAlert(true);

    setTimeout(() => setAlert(null), 5000);
  };

  // Utility method to close the alert
  const closeAlert = () => {
    setAlert(false);
    setError('');
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <AppNavbar title="GitProfile" icon="fab fa-github" />
          {alert ? <Alert closeAlert={closeAlert} error={error} /> : null}
          <div className="container">
            <Switch>
              {/* Instead of creating a new home component we can make use of the render props 
            for using the methods that we have defined here in the App Component  
            in the Home Page without creating any new component for Home. Otherwise we will
            again be passing props up and down. To prevent that use render props approach */}
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchBar setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route path="/about" exact component={PageAbout} />
              <Route
                path="/users/:id"
                exact
                render={props => (
                  <PageUser
                    getRepos={getRepos}
                    {...props}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
