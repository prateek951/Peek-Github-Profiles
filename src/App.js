import React from "react";
import axios from "axios";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Users from "./components/users/Users";
import SearchBar from "./components/users/SearchBar";

class App extends React.Component {
  state = {
    users: [],
    error: "",
    loading: false
  };
  searchUsers = async term => {
    console.log(term);

    if (!term) {
      this.setState({
        users: [],
        loading: false,
        error: "No users pertaining to the handle found"
      });
      return;
    }
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
  clearUsers = () => {
    // console.log("inside the clearUsers method");
    this.setState({ users: [], loading: false });
  };
  render() {
    const { users, loading, error } = this.state;
    return (
      <div className="App">
        <AppNavbar title="GitProfile" icon="fab fa-github" />
        <h2 className="text-center">{error ? error : null}</h2>
        <div className="container">
          <SearchBar
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
