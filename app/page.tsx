"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar/Navbar';
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

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Akash Sasikumar | Portfolio</title>
        <meta name="description" content="Welcome to the portfolio website of Akash Sasikumar. Explore my projects, skills, and experience in software development, web design, and more." />
        <meta name="keywords" content="portfolio, Akash Sasikumar, software development, web design, projects, skills" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Replace '/apple-touch-icon.png' with the actual path to your custom apple-touch-icon */}

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Akash Sasikumar | Portfolio" />
        <meta property="og:description" content="Welcome to the portfolio website of Akash Sasikumar. Explore my projects, skills, and experience in software development, web design, and more." />
        <meta property="og:image" content="/img/og-image.jpg" />
        {/* Replace '/img/og-image.jpg' with the path to your custom Open Graph image */}
        <meta property="og:url" content="https://www.your-portfolio-website.com" />
        {/* Replace 'https://www.your-portfolio-website.com' with the actual URL of your portfolio website */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akash Sasikumar | Portfolio" />
        <meta name="twitter:description" content="Welcome to the portfolio website of Akash Sasikumar. Explore my projects, skills, and experience in software development, web design, and more." />
        <meta name="twitter:image" content="/img/twitter-card-image.jpg" />
        {/* Replace '/img/twitter-card-image.jpg' with the path to your custom Twitter Card image */}
      </Head>

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Techstack />
      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;