import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PageContent from "./Components/PageContent";

class App extends Component {
  state = {
    buttonStatus: false
  };

  toggleHandler = () => {
    console.log(this.state.buttonStatus);
    this.setState({ buttonStatus: !this.state.buttonStatus });
  };

  render() {
    return (
      <div className="body_style">
        <Header toggleHandler={this.toggleHandler} />
        <Sidebar buttonStatus={this.state.buttonStatus} />
        <PageContent buttonStatus={this.state.buttonStatus} />
      </div>
    );
  }
}

export default App;
