import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
        home
      </div>
    )
  }
}

class About extends Component {
  render(){
    return (
      <div>
        About
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </header>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
