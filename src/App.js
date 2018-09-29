import React, { Component } from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/home';
import Men from './Views/Men/men';
import Navbar from '../src/components/navbar/navbar';
import Footer from '../src/components/footer/footer';
class App extends Component {


  render() {
    return (
      <Router>
        <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/men" component={Men} />
        <Footer/>
        </div>
      </Router>
    );
   
    
    
  }
}

export default App;
