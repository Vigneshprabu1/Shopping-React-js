import React, { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/home';
import Men from './Views/Men/men';
class App extends Component {


  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/men" component={Men} />
        </div>
      </Router>
    );
   
    
    
  }
}

export default App;
