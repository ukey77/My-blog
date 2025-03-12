import React, { useRef } from "react";
import './App.css';

import "./assets/styles/index.scss";

// == component
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// == main ==
import Home from './components/Home';

// == pages ==
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from "./components/Contact";

const App = () => {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // 스크롤 이동 함수
  const scrollToSection = (ref) => {
    if (ref.current) {
      const headerOffset = 77; // 네비게이션 바 높이 수동조정정
      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="App">
      <Navigation 
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          portfolioRef,
          skillsRef,
          contactRef
        }}
      />
      <div className="home-content-area">
        <Home />
      </div>
      <div className="all-contents-area">
        {/* == pages == */}
        <div ref={aboutRef}><AboutMe /></div>
        <div ref={portfolioRef}><Portfolio /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={contactRef}><Contact /></div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
