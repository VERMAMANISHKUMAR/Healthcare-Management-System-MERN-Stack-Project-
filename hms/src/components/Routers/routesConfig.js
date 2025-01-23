// src/routes/routesConfig.js
import Home from '../../components/Home';
import Services from '../../components/Services';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Dashboard from '../../components/Dashboard';
import Homepage from '../../components/Dashboard/Homepage';
import ServicesPage from '../../components/Dashboard/ServicesPage';
import EmergencyServices from '../../components/Dashboard/EmergencyServices';
import MedicalRecords from '../../components/Dashboard/MedicalRecords';
import Patients from '../../components/Dashboard/Patients';
import Appointments from '../../components/Dashboard/Appointments';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const routesConfig = [
  { path: "/", component: Home },
  { path: "/services", component: Services },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/dashboard", component: Dashboard },
  { path: "/dashboard/hompage", component: Homepage },
  { path: "/dashboard/servicespage", component: ServicesPage },
  { path: "/dashboard/servicespage/emergency-services", component: EmergencyServices },
  { path: "/dashboard/servicespage/medical-records", component: MedicalRecords },
  { path: "/dashboard/patients", component: Patients },
  { path: "/dashboard/appointments", component: Appointments },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
];

export default routesConfig;
