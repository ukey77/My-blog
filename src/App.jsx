import React from "react";
import './App.css';

// == scss ==
import "./assets/styles/index.scss";

// == pages ==
import Navigation from "./components/Navigation";
import Home from './components/Home';
import AbouteMe from "./components/AbouteMe";
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <div className="home-content-area">
        <Home />
      </div>
        <div className="all-contents-area">
          <AbouteMe />
          <Portfolio />
          <Skills/>
          {/* <Contact/> */}
        </div>
    </div>
  );
}

export default App;
