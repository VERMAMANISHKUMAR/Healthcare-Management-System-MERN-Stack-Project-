import React from 'react';
import './DashboardStyle/MedicalRecords.css'; // Import your CSS

const MedicalRecords = () => {
  const records = [
          {
                    id: 1,
                    name: "John Doe",
                    dob: "1990-01-01",
                    diagnosis: "Hypertension",
                    treatment: "Medication: Lisinopril 10mg daily",
                    lastVisit: "2024-07-10",
                  },
                  {
                    id: 2,
                    name: "Jane Smith",
                    dob: "1985-06-15",
                    diagnosis: "Diabetes Type 2",
                    treatment: "Medication: Metformin 500mg twice daily",
                    lastVisit: "2024-08-22",
                  },
                  {
                    id: 3,
                    name: "Michael Brown",
                    dob: "1972-11-05",
                    diagnosis: "Asthma",
                    treatment: "Inhaler: Salbutamol as needed",
                    lastVisit: "2024-06-12",
                  },
                  {
                    id: 4,
                    name: "Emily Johnson",
                    dob: "2000-09-23",
                    diagnosis: "Allergic Rhinitis",
                    treatment: "Antihistamines: Loratadine 10mg daily",
                    lastVisit: "2024-09-01",
                  },
                  {
                    id: 5,
                    name: "Sarah Lee",
                    dob: "1982-03-12",
                    diagnosis: "Migraine",
                    treatment: "Medication: Sumatriptan 50mg as needed",
                    lastVisit: "2024-06-20",
                  },
                  {
                    id: 6,
                    name: "James White",
                    dob: "1995-10-09",
                    diagnosis: "Anxiety Disorder",
                    treatment: "Therapy and Sertraline 50mg daily",
                    lastVisit: "2024-07-11",
                  },
                  {
                    id: 7,
                    name: "Linda Green",
                    dob: "1979-08-19",
                    diagnosis: "Osteoarthritis",
                    treatment: "Physical therapy and Ibuprofen 200mg as needed",
                    lastVisit: "2024-05-28",
                  },
                  {
                    id: 8,
                    name: "David Black",
                    dob: "1994-04-22",
                    diagnosis: "Chronic Back Pain",
                    treatment: "Physical therapy and Acetaminophen 500mg",
                    lastVisit: "2024-08-05",
                  },
                  {
                    id: 9,
                    name: "Alice Brown",
                    dob: "1987-12-30",
                    diagnosis: "Irritable Bowel Syndrome",
                    treatment: "Dietary changes and Dicyclomine 10mg",
                    lastVisit: "2024-06-15",
                  },
                  {
                    id: 10,
                    name: "Tom Blue",
                    dob: "1992-11-18",
                    diagnosis: "High Cholesterol",
                    treatment: "Medication: Atorvastatin 20mg daily",
                    lastVisit: "2024-08-30",
                  },
                  {
                    id: 11,
                    name: "Emma Wilson",
                    dob: "1989-07-27",
                    diagnosis: "Eczema",
                    treatment: "Topical Steroid Cream",
                    lastVisit: "2024-07-20",
                  },
                  {
                    id: 12,
                    name: "Oliver Clark",
                    dob: "1998-05-14",
                    diagnosis: "Depression",
                    treatment: "Medication: Escitalopram 10mg daily",
                    lastVisit: "2024-08-15",
                  },
                  {
                    id: 13,
                    name: "Sophia Adams",
                    dob: "1976-01-11",
                    diagnosis: "Chronic Fatigue Syndrome",
                    treatment: "Lifestyle management and Amitriptyline 25mg",
                    lastVisit: "2024-06-08",
                  },
                  {
                    id: 14,
                    name: "Liam Miller",
                    dob: "1991-03-21",
                    diagnosis: "Cluster Headaches",
                    treatment: "Oxygen therapy and Sumatriptan",
                    lastVisit: "2024-09-10",
                  },
                  {
                    id: 15,
                    name: "Mia Thompson",
                    dob: "2001-09-03",
                    diagnosis: "Acne",
                    treatment: "Topical Retinoid and Antibiotics",
                    lastVisit: "2024-07-14",
                  },
                  {
                    id: 16,
                    name: "Lucas Harris",
                    dob: "1999-12-17",
                    diagnosis: "Gastroesophageal Reflux Disease",
                    treatment: "Lifestyle changes and Omeprazole 20mg",
                    lastVisit: "2024-06-21",
                  },
                  {
                    id: 17,
                    name: "Amelia Davis",
                    dob: "1990-04-08",
                    diagnosis: "Insomnia",
                    treatment: "Cognitive Behavioral Therapy and Zolpidem 5mg",
                    lastVisit: "2024-08-11",
                  },
                  {
                    id: 18,
                    name: "Benjamin Young",
                    dob: "1984-11-22",
                    diagnosis: "Anemia",
                    treatment: "Iron Supplements and Dietary changes",
                    lastVisit: "2024-07-18",
                  },
                  {
                    id: 19,
                    name: "Charlotte King",
                    dob: "1978-02-03",
                    diagnosis: "Arthritis",
                    treatment: "Physical therapy and Diclofenac 75mg",
                    lastVisit: "2024-08-07",
                  },
                  {
                    id: 20,
                    name: "Elijah Scott",
                    dob: "1993-05-16",
                    diagnosis: "Peptic Ulcer",
                    treatment: "Proton Pump Inhibitors",
                    lastVisit: "2024-07-09",
                  },
                  {
                    id: 21,
                    name: "Harper Walker",
                    dob: "1986-07-28",
                    diagnosis: "Gout",
                    treatment: "Allopurinol and Diet modifications",
                    lastVisit: "2024-09-05",
                  },
                  {
                    id: 22,
                    name: "Noah Lewis",
                    dob: "1997-12-02",
                    diagnosis: "Chronic Sinusitis",
                    treatment: "Nasal corticosteroids and antibiotics",
                    lastVisit: "2024-06-11",
                  },
                  {
                    id: 23,
                    name: "Evelyn Hall",
                    dob: "1994-03-07",
                    diagnosis: "Thyroid Disorder",
                    treatment: "Levothyroxine 50mcg daily",
                    lastVisit: "2024-08-13",
                  },
                  {
                    id: 24,
                    name: "Henry Allen",
                    dob: "1981-10-30",
                    diagnosis: "Coronary Artery Disease",
                    treatment: "Aspirin and Statins",
                    lastVisit: "2024-07-25",
                  },
                  {
                    id: 25,
                    name: "Ava Hill",
                    dob: "1996-11-12",
                    diagnosis: "Obesity",
                    treatment: "Lifestyle modifications and Orlistat",
                    lastVisit: "2024-08-04",
                  },
                  {
                    id: 26,
                    name: "William Roberts",
                    dob: "1990-05-25",
                    diagnosis: "Tension Headache",
                    treatment: "Ibuprofen and Stress management",
                    lastVisit: "2024-09-03",
                  },
                  {
                    id: 27,
                    name: "Olivia Perez",
                    dob: "1987-09-11",
                    diagnosis: "Urinary Tract Infection",
                    treatment: "Antibiotics: Nitrofurantoin",
                    lastVisit: "2024-06-18",
                  },
                  {
                    id: 28,
                    name: "Alexander Wright",
                    dob: "1983-04-19",
                    diagnosis: "Chronic Bronchitis",
                    treatment: "Bronchodilators and Smoking cessation",
                    lastVisit: "2024-08-21",
                  },
                  {
                    id: 29,
                    name: "Isabella Green",
                    dob: "1995-02-14",
                    diagnosis: "Panic Disorder",
                    treatment: "Cognitive Behavioral Therapy",
                    lastVisit: "2024-07-06",
                  },
                  {
                    id: 30,
                    name: "Mason Campbell",
                    dob: "1988-06-10",
                    diagnosis: "Tendonitis",
                    treatment: "Rest and Ibuprofen",
                    lastVisit: "2024-09-12",
                  },
                  {
                    id: 31,
                    name: "Ethan Mitchell",
                    dob: "1975-08-26",
                    diagnosis: "Hypertension",
                    treatment: "Losartan 50mg daily",
                    lastVisit: "2024-07-29",
                  },
                  {
                    id: 32,
                    name: "Abigail Moore",
                    dob: "1984-12-20",
                    diagnosis: "Hyperthyroidism",
                    treatment: "Methimazole 10mg daily",
                    lastVisit: "2024-08-01",
                  },
  ];

  return (
    <div className="medical-records-container">
      <h1 className="medical-records-title">Patient Medical Records</h1>
      <table className="medical-records-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.dob}</td>
              <td>{record.diagnosis}</td>
              <td>{record.treatment}</td>
              <td>{record.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalRecords;
