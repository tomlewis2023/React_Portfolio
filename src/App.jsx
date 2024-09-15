import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import PortfolioNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <div>
     <PortfolioNavbar/>
      <Hero/>
      <Projects/>
      <About/>     
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
