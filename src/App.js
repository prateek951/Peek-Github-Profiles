import React from "react";
import axios from "axios";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";
import Alert from "./components/users/Alert";

class App extends React.Component {
  state = {
    users: [],
    error: "",
    alert: false,
    loading: false
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
    const { users, loading, error, alert } = this.state;
    return (
      <div className="App">
        <AppNavbar title="GitProfile" icon="fab fa-github" />
        {alert ? <Alert closeAlert={this.closeAlert} error={error} /> : null}
        <div className="container">
          <SearchBar
            setAlert={this.setAlert}
            show={!!users.length}
            clearUsers={this.clearUsers}
            searchUsers={this.searchUsers}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
