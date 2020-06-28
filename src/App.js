import React from 'react';
import CustomNavbar from './navbar.js';
import About from './about.js';
import Contact from './contact.js';
import Home from './home.js';
import Project from './project.js';
import ScientificImagingSoftware from './projects/scientific-imaging-software.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './css/App.css';

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
            <Route path="/scientific-imaging-software">
              <ScientificImagingSoftware />
            </Route>
            {/* change below to individual projects */}
            <Route path="/project">
              <Project />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
