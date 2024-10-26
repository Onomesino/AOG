import React from 'react';
import './css/style.css'; // Import your CSS files




// Component for Hero Section
const HeroSection = () => (
  <aside id="fh5co-hero">
    <div classNameName="flexslider">
      <ul classNameName="slides">
        <li style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
          <div classNameName="overlay"></div>
          <div classNameName="container-fluid">
            <div classNameName="row">
              <div classNameName="col-md-6 col-md-offset-3 text-center slider-text">
                <div classNameName="slider-text-inner">
                  <h1>About Us</h1>
                  <h2>Free HTML5 templates Made by <a href="http://freehtml5.co/" target="_blank" rel="noopener noreferrer">freehtml5.co</a></h2>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
);




// Component for About Section
const About = () => (
  <div id="fh5co-about">
    <div classNameName="row">
      <div classNameName="col-md-4">
        <h3>Daily Verse</h3>
        <blockquote classNameName="dailyVerse">
          <p>&ldquo;The LORD [is] my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him.&rdquo;</p>
          <span>Psalms 28:7</span>
        </blockquote>
      </div>
      <div classNameName="col-md-4">
        <h3>Our Mission</h3>
        <p>Our mission is to serve with dignity and compassion, helping those in need wherever they are. We strive to follow God's teachings in every aspect of life.</p>
      </div>
      <div classNameName="col-md-4">
        <h3>Our Ministries</h3>
        <ul classNameName="ministries-list">
          <li><i classNameName="icon-check"></i>Health and Wellness Ministry</li>
          <li><i classNameName="icon-check"></i>Medical Missionary Support</li>
          <li><i classNameName="icon-check"></i>Educational Programs</li>
        </ul>
      </div>
    </div>
  </div>
);

  export default About;


