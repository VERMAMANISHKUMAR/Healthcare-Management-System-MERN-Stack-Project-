import React from 'react';
import '../Dashboard/DashboardStyle/EmergencyServices.css';  // Import the CSS file
import ambulance from "../assets/ambulance.png";  // Correcting image filename

const EmergencyServices = () => {
  return (
    <div className="emergency-container">
      <div className="emergency-content">
        <h1>Emergency Services</h1>
        <p>
          Our emergency response team is available 24/7 for any urgent healthcare needs.
        </p>
        <p className="emergency-description">
          From accidents to acute conditions, our medical professionals are ready to provide immediate care.
          Don’t hesitate to contact us for emergency support, as every second matters.
        </p>
      </div>

      <div className="emergency-image">
        <img src={ambulance} alt="Emergency Services" />
      </div>

      {/* Emergency Contact Form */}
      <div className="emergency-form-container">
        <h2>Request Emergency Assistance</h2>
        <form className="emergency-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" rows="3" placeholder="Enter your address" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="district">District</label>
            <input type="text" id="district" name="district" placeholder="Enter your district" required />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" placeholder="Enter your state" required />
          </div>

          <div className="form-group">
            <label htmlFor="pincode">Pin Code</label>
            <input type="text" id="pincode" name="pincode" placeholder="Enter your pin code" required />
          </div>

          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input type="text" id="patientName" name="patientName" placeholder="Enter patient's name" required />
          </div>

          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default EmergencyServices;
