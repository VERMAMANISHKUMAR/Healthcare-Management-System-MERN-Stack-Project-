import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid my-2">
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#2969EE" }}>
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-start text-bold">Healthcare Management System</h6>
              <p className="text-start">
                Our Healthcare Management System provides comprehensive solutions for patient care, appointment scheduling, 
                medical records management, and real-time doctor-patient communication. Revolutionizing the healthcare industry
                with technology.
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-start">Products</h6>
              <p className="text-start"><a href="#!" className="text-white">Patient Portal</a></p>
              <p className="text-start"><a href="#!" className="text-white">Appointment Management</a></p>
              <p className="text-start"><a href="#!" className="text-white">Medical Records</a></p>
              <p className="text-start"><a href="#!" className="text-white">Billing & Payments</a></p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-start">Useful Links</h6>
              <p className="text-start"><a href="#!" className="text-white">Contact Support</a></p>
              <p className="text-start"><a href="#!" className="text-white">Privacy Policy</a></p>
              <p className="text-start"><a href="#!" className="text-white">Careers</a></p>
              <p className="text-start"><a href="#!" className="text-white">Terms & Conditions</a></p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-start">Contact</h6>
              <p className="text-start"><FontAwesomeIcon icon={faHome} className="mr-1" /> New York, NY 10012, US</p>
              <p className="text-start"><FontAwesomeIcon icon={faEnvelope} className="mr-1" /> info@healthcare.com</p>
              <p className="text-start"><FontAwesomeIcon icon={faPhone} className="mr-1" /> +1 234 567 890</p>
              <p className="text-start"><FontAwesomeIcon icon={faPrint} className="mr-1" /> +1 234 567 891</p>
            </div>
          </div>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-start">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2025 Created By :
                <a className="text-white" href="https://vermamanishkumar.github.io/My-Portfolio/">Manish Kumar Verma</a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </div>
  

  );
};

export default Footer;
