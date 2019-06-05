import React from "react";
import axios from "axios";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Users from "./components/users/Users";

class App extends React.Component {
  state = {
    users: [],
    error: "",
    loading: false
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const { data: users } = await axios.get("https://api.github.com/users");
      // ss
      setTimeout(() => {
        this.setState({ users: users, error: "", loading: false });
      }, 3000);
    } catch (ex) {
      const error = "Failed to fetch the users";
      this.setState({ error: error, loading: false });
    }
  }
  render() {
    const { users, loading, error } = this.state;
    return (
      <div className="App">
        <AppNavbar title="GitProfile" icon="fab fa-github" />
        <h2 className="text-center">{error ? error : null}</h2>
        <div className="container">
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
