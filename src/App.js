import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Podcasts from './Podcasts';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/podcasts" component={Podcasts}/>
            <Route component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
