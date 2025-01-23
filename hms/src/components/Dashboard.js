import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navigation Section */}
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/dashboard/homepage">Home</Link></li>
          <li><Link to="/dashboard/servicespage">Services</Link></li>
          <li><Link to="/dashboard/patients">Patients</Link></li>
          <li><Link to="/dashboard/appointments">Appointments</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <div className="dashboard-main">
        <h1 className="dashboard-heading">Welcome to User Dashboard</h1>

        {/* Cards Section */}
        <div className="dashboard-cards">
          <div className="card">
            <Link to="/dashboard/patients" className="link-card">
              <h3>Patients</h3>
            </Link>
            <p>Manage patient records and view medical history.</p>
          </div>
          <div className="card">
            <Link to="/dashboard/appointments" className="link-card">
              <h3>Appointments</h3>
            </Link>
            <p>Track upcoming appointments and schedules.</p>
          </div>
          <div className="card">
            <Link to="/dashboard/servicespage" className="link-card">
              <h3>Medical Services</h3>
            </Link>
            <p>View available services and assign to patients.</p>
          </div>
          <div className="card">
            <Link to="/dashboard/billing" className="link-card">
              <h3>Billing</h3>
            </Link>
            <p>Manage billing, invoices, and payments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
