// src/components/Home.js
import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    
    // <section id="home">
    //   <h1>Welcome to My Portfolio</h1>
    //   <p>Hi, I'm Sahil Kumar, a Full-Stack Developer specializing in React and Spring Boot.</p>
    // </section>
    <header className="hero">
    <div className="overlay"></div>
    <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I am Sahil Kumar, a Full-Stack Developer</p>
        <a href="#about" className="btn">Learn More</a>
    </div>
     </header>
  );
}

export default Home;
