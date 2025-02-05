import React from "react";
import './App.css';

// == pages ==
import Navigation from "./components/Navigation.js";
import Home from './components/Home.js';
import AbouteMe from "./components/AbouteMe.js";
import Portfolio from './components/Portfolio.js';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <div className="home-content-area">
        <Home />
      </div>
        <div className="all-contents-area">
          <AbouteMe/>
          <Portfolio />
          <Skills/>
        </div>
    </div>
  );
}

export default App;
