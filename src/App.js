import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import Alert from "./components/users/Alert";
import PageAbout from "./components/pages/PageAbout";
import PageUser from "./components/pages/PageUser";

class App extends React.Component {
  state = {
    users: [],
    repos: [],
    error: "",
    alert: false,
    loading: false,
    currentUser: {}
  };

  // Utility method to search the users
  searchUsers = async term => {
    console.log(term);
    this.setState({ loading: true });
    try {
      const {
        data: { items: users }
      } = await axios.get(
        `https://api.github.com/search/users?q=${term}&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      if (users && users.length > 0) {
        this.setState({ users: users, error: "", loading: false });
      } else {
        this.setState({
          loading: false,
          error: "No user pertaining to this handle exists"
        });
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  // Utility method to get a single github user
  getUser = async username => {
    this.setState({ loading: true });
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}?&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(data);
      this.setState({ loading: false, currentUser: data });
    } catch (ex) {
      console.log(ex);
      this.setState({ loading: false, currentUser: {} });
    }
  };
  // Utility method to get a single user's repositories
  getRepos = async username => {
    this.setState({ loading: true });
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      // console.log(data);
      this.setState({ loading: false, repos: data });
    } catch (ex) {
      console.log(ex);
      this.setState({ loading: false, repos: [] });
    }
  };

  // Utility method to clear the users

  clearUsers = () => {
    // console.log("inside the clearUsers method");
    this.setState({ users: [], loading: false });
  };

  // Utility method to set the alert

  setAlert = alertMessage => {
    this.setState({
      users: [],
      loading: false,
      error: alertMessage,
      alert: true
    });
  };

  // Utility method to close the alert
  closeAlert = () => this.setState({ alert: false, error: "" });

  render() {
    const { users, loading, error, alert, currentUser, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <AppNavbar title="GitProfile" icon="fab fa-github" />
          {alert ? <Alert closeAlert={this.closeAlert} error={error} /> : null}
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
                    <SearchBar
                      setAlert={this.setAlert}
                      show={!!users.length}
                      clearUsers={this.clearUsers}
                      searchUsers={this.searchUsers}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route path="/about" exact component={PageAbout} />
              <Route
                path="/users/:id"
                exact
                render={props => (
                  <PageUser
                    getRepos={this.getRepos}
                    {...props}
                    getUser={this.getUser}
                    user={currentUser}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
