import React from 'react';
import CustomNavbar from './navbar.js';
import About from './about.js';
import Contact from './contact.js';
import Home from './home.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <CustomNavbar></CustomNavbar>
        </header>
        <div className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
