import React from 'react';
import CustomNavbar from './components/navbar.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Home from './components/home.js';
import ScientificImagingSoftware from './components/projects/scientific-imaging-software.js';
import HPATProcessingSimulator from './components/projects/HPAT-processing-simulator.js';
import JeopardyHelper from './components/projects/jeopardy-helper.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header sticky-top">
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
            <Route path="/HPAT-processing-simulator">
              <HPATProcessingSimulator />
            </Route>
            <Route path="/jeopardy-helper">
              <JeopardyHelper />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
