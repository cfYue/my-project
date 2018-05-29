import React, { Component } from 'react';
import {Router,Switch,withRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world!
      </div>
    );
  }
}

export default withRouter(App);
