import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './Views/Home/home';
class App extends Component {


  render() {
    return (
      <Router>
        <div>
        <Route  path="/" component={Home} />
        
        </div>
      </Router>
    );
  }
}

export default App;