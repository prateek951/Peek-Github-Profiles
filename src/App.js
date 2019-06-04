import React from "react";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import UserItem from "./components/users/UserItem";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppNavbar title="GitProfile" icon="fab fa-github" />
        <UserItem />
      </div>
    );
  }
}

export default App;
