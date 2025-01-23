import React from 'react';
import './DashboardStyle/Appointment.css';

const Appointments = () => {
  return (
    <div className="appointments-container">
      {/* Header */}
      <header className="appointments-header">
        <h1>Healthcare Management System - Appointments</h1>
      </header>

      {/* Main Content */}
      <div className="appointments-main">
        {/* Dummy Content */}
        <div className="appointment-info">
         
          <p>
            Welcome to the appointments page. Here you can schedule, manage, and view your upcoming medical appointments. Please fill out the form below to book a new appointment or contact our support for assistance.
          </p>
        </div>

        {/* Appointment Form */}
        <div className="appointment-form-container">
          <h3>Schedule an Appointment</h3>
          <form className="appointment-form">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="date">Appointment Date:</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Appointment Time:</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="doctor">Choose a Doctor:</label>
            <select id="doctor" name="doctor" required>
              <option value="">--Select a Doctor--</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Williams">Dr. Williams</option>
              <option value="Dr. Anmol Nigam">Dr. Anmol Nigam</option>
              <option value="Dr. Rohini Bhatia">Dr. Rohini Bhatia</option>
            </select>

            <label htmlFor="message">Reason for Appointment:</label>
            <textarea id="message" name="message" rows="4" placeholder="Describe your reason for the appointment..." required></textarea>

            <button type="submit" className="submit-btn">Book Appointment</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Appointments;
