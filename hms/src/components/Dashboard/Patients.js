import React, { useState } from 'react';
import './DashboardStyle/Patients.css'; // Import your custom CSS

const DamiContentPage = () => {
  const [patients, setPatients] = useState([
    { name: 'John Doe', age: 45, medicalHistory: 'Diabetes, Hypertension' },
    { name: 'Jane Smith', age: 30, medicalHistory: 'Asthma' }
  ]);
  
  const [newPatient, setNewPatient] = useState({ name: '', age: '', medicalHistory: '' });
  const [searchTerm, setSearchTerm] = useState('');

  // Handle input changes for the new patient form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  // Handle form submission for adding new patients
  const handleAddPatient = (e) => {
    e.preventDefault();
    if (newPatient.name && newPatient.age && newPatient.medicalHistory) {
      setPatients([...patients, newPatient]);
      setNewPatient({ name: '', age: '', medicalHistory: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter patients based on the search term
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.medicalHistory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="content-container">
      <h1 className="title">Our Patients</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="main-content">
        <div className="form-container">
          <h4>Add New Patient</h4>
          <form onSubmit={handleAddPatient}>
            <label>Patient Name</label>
            <input
              type="text"
              placeholder="Enter patient name"
              name="name"
              value={newPatient.name}
              onChange={handleInputChange}
              className="form-input"
            />
            
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter age"
              name="age"
              value={newPatient.age}
              onChange={handleInputChange}
              className="form-input"
            />
            
            <label>Medical History</label>
            <input
              type="text"
              placeholder="Enter medical history"
              name="medicalHistory"
              value={newPatient.medicalHistory}
              onChange={handleInputChange}
              className="form-input"
            />

            <button type="submit" className="submit-btn">Add Patient</button>
          </form>
        </div>

        <div className="records-container">
          <h4>Patient Records</h4>
          <div className="records-list">
            {filteredPatients.length > 0 ? (
              <table className="patients-table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Medical History</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient, index) => (
                    <tr key={index}>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.medicalHistory}</td>
                      <td>
                        <button className="view-btn">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No patients found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamiContentPage;
