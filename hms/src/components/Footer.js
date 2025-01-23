import React from 'react';
import './Style/Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Healthcare Management System */}
        <div className="footer-column">
          <h3>Healthcare Management System</h3>
          <p>
            The Healthcare Management System is a robust and efficient platform that helps you manage patient data, appointments, and services with ease. We strive to provide a seamless experience in healthcare management.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>Address: 123 Healthcare St, Medical City</li>
            <li>Email: info@healthcare.com</li>
            <li>Phone: (123) 456-7890</li>
            <li><a href="https://goo.gl/maps/sampleLocation">Google Location</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Healthcare Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
