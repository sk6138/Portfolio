
import React , { useState }from 'react';
import './CSS/Header.css';

const Navbar = () => {
  

    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

 

  return (
 
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
    
    <a href="#home">
    <div className="logo"> </div>
      </a>
    <div className="hamburger" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
  );
};

export default Navbar;

