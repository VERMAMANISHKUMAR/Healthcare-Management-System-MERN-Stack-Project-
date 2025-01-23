import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './DashboardStyle/Home.css'; // Import your CSS
import Benar from '../Dashboard/image/benar.jpg';

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (in milliseconds)
      easing: 'ease-in-out',  // Type of animation easing
      once: true,  // Whether the animation should happen only once
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="homepage-container">
      <h1 className="homepage-title" data-aos="fade-up">Welcome to the Homepage</h1>
      <div>
        <img src={Benar} alt="Placeholder" style={{height:'100',width:'100%',marginBottom:'30px'}}/>
      </div>
      
      <div className="card-container">
        <div className="card" data-aos="fade-right">
          <h2>Card 1</h2>
          <p>This is the first card on the homepage.</p>
        </div>
        
        <div className="card" data-aos="fade-left">
          <h2>Card 2</h2>
          <p>This is the second card with cool content.</p>
        </div>

        <div className="card" data-aos="fade-right">
          <h2>Card 3</h2>
          <p>Here is the third card with more awesome text.</p>
        </div>

        <div className="card" data-aos="fade-left">
          <h2>Card 4</h2>
          <p>The final card has some amazing information.</p>
        </div>
        <div className="card" data-aos="fade-left">
          <h2>Card 4</h2>
          <p>The final card has some amazing information.</p>
        </div>
        <div className="card" data-aos="fade-left">
          <h2>Card 4</h2>
          <p>The final card has some amazing information.</p>
        </div>
        <div className="card" data-aos="fade-left">
          <h2>Card 4</h2>
          <p>The final card has some amazing information.</p>
        </div>
        <div className="card" data-aos="fade-left">
          <h2>Card 4</h2>
          <p>The final card has some amazing information.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
