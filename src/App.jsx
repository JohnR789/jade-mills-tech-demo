import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Listings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
