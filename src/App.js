// src/App.js
import React from 'react';
 import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';


const App = () => {
  return (
    <div>
      <Header/>
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
