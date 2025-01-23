import {Link} from "react-router-dom"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './DashboardStyle/ServicesPage.css'; // Import your CSS

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (in milliseconds)
      easing: 'ease-in-out',  // Type of animation easing
      once: true,  // Animation happens only once
    });
  }, []); // Runs once on mount

  return (
    <div className="services-container">
      <h1 className="services-title" data-aos="fade-up">Our Healthcare Services</h1>

      <div className="services-card-container">
        <div className="service-card" data-aos="flip-left">
          <h2>Patient Care</h2>
          <p>We provide 24/7 comprehensive patient care with access to top specialists and treatments.</p>
        </div>
        
        <div className="service-card" data-aos="flip-right">
          <h2>Appointment Booking</h2>
          <p>Schedule appointments online with your preferred healthcare provider in just a few clicks.</p>
        </div>

        <div className="service-card" data-aos="flip-left">
        <Link to="/dashboard/servicespage/medical-records"><h2>Medical Records</h2></Link>
          <p>Access your medical records online anytime, anywhere with our secure digital platform.</p>
        </div>

        <div className="service-card" data-aos="flip-right">
        <Link to="/dashboard/servicespage/emergency-services">
            <h2>Emergency Services</h2>
          </Link>
          <p>Our emergency response team is available 24/7 for any urgent healthcare needs.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
