import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App1 from './components/App1'
import App2 from './components/App2'
import './App.css';


class App extends Component {

  renderRouter() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={App1} />
          <Route path="/app2" exact component={App2} />
        </div>
      </Router>
    )
  }

  render() {
    return (
      <Router>{this.renderRouter()}</Router>

    );
  }
}
export default App;