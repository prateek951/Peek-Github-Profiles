import React from "react";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Users from "./components/users/Users";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppNavbar title="GitProfile" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
