import React, { Component } from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';

import './App.css';
import Home from './Views/Home/home';
import Men from './Views/Men/men';
import Women from './Views/Women/women';
import Contact from './Views/Contact/contact';
import Navbar from '../src/components/navbar/navbar';
import Footer from '../src/components/footer/footer';

class App extends Component {



  render() {
    return (
      <Router >
        <div>
  
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women}/>
        <Route path="/contact" component={Contact} />

        <Footer/>
        </div>
      </Router>
  //     <BrowserRouter>
    
  //   <Switch>
  //   <Navbar />
  //   <Route exact path='/' component={Home}/>
  //   <Route path='/men' component={Men}/>
  //   <Footer/>
  // </Switch>
  
  // </BrowserRouter>
    );
   
    
    
  }
}

export default App;
