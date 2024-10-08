// src/App.js
// import React from 'react';
//  import './App.css';
// import Header from './Component/Header';
// import Home from './Component/Home';
// import About from './Component/About';
// import Projects from './Component/Projects';
// import Contact from './Component/Contact';


// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Home />
//       <Projects />
//       <About />
//       <Contact />
//     </div>
//   );
// }

// export default App;

//v0.1
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

