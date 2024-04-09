"use client";

import React from 'react';

import Navbar2 from './components/Navbar/Navbar2';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Techstack from './components/Techstack/Techstack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>

      <Navbar2 />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Techstack />
      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;