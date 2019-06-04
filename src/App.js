import React from "react";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppNavbar title="GitProfile" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
