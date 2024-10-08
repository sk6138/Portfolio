import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-gallery">
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
        </div>
        <div className="portfolio-item">
          <img src="project3.jpg" alt="Project 3" />
          <h3>Project 3</h3>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
