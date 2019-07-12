import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/layouts/AppNavbar';
import Users from './components/users/Users';
import SearchBar from './components/users/SearchBar';
import Alert from './components/users/Alert';
import PageAbout from './components/pages/PageAbout';
import PageUser from './components/pages/PageUser';
import GithubState from './contexts/github/GithubState';
import AlertState from './contexts/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <AppNavbar title="GitProfile" icon="fab fa-github" />
            {alert ? <Alert /> : null}
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
                      <SearchBar />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route path="/about" exact component={PageAbout} />
                <Route path="/users/:id" exact component={PageUser} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
