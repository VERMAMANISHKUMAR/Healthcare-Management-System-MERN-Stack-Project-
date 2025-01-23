// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Services from './components/Services';
// import About from './components/About';
// import Contact from './components/Contact';
// import Dashboard from './components/Dashboard';
// import Homepage from './components/Dashboard/Homepage';
// import ServicesPage from './components/Dashboard/ServicesPage';
// import Patients from './components/Dashboard/Patients';
// import Appointments from './components/Dashboard/Appointments';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import EmergencyServices from '../src/components/Dashboard/EmergencyServices';  // Update the path
// import MedicalRecords from './components/Dashboard/MedicalRecords';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="dashboard/hompage" element={<Homepage/>} />
//           <Route path="dashboard/servicespage" element={<ServicesPage/>} />
//           <Route path="/dashboard/servicespage/emergency-services" element={<EmergencyServices />} />
//           <Route path="/dashboard/servicespage/medical-records" element={<MedicalRecords />} />
//           <Route path="dashboard/patients" element={<Patients/>} />
//           <Route path="dashboard/appointments" element={<Appointments />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//         <Footer />
//       </div>
      
//     </Router>
//   );
// };

// export default App;
// src/App.js

import React from 'react';
import 'aos/dist/aos.css';
import AppRouter from './components/Routers/AppRouter';

const App = () => {
  return (
    <AppRouter />
  );
};

export default App;

