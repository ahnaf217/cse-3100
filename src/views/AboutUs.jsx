import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>We're dedicated to giving every cat a loving home!</p>
      </header>
      
      <section className="about-content">
        <div className="section-title">
          <h2>Our Mission</h2>
          <p>At our organization, we believe that every cat deserves a second chance for love and happiness. Our mission is to connect furry friends with compassionate families.</p>
        </div>
        
        <div className="section-title">
          <h2>Our Story</h2>
          <p>Founded by a group of passionate animal lovers, our organization was created to provide a safe space for cats in need. From rescues to adoption, we are here to help our feline friends find their forever homes.</p>
        </div>
        
        <div className="section-title">
          <h2>Why Adopt From Us?</h2>
          <ul>
            <li>We care deeply about each and every cat.</li>
            <li>Our adoption process is quick and simple.</li>
            <li>We ensure every cat is health-checked, vaccinated, and ready for adoption.</li>
            <li>Our team provides support to help with any post-adoption questions or concerns.</li>
          </ul>
        </div>
      </section>
      
      <footer className="about-footer">
        <p>Ready to meet your new feline friend? Start your adoption journey today!</p>
      </footer>
    </div>
  );
}

export default AboutUs;
