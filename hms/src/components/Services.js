import React from 'react';
import './Style/Services.css'; // Optional for additional styling

const Services = () => {
  return (
    <div className="services-container container py-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <p className="text-center mb-5">
        We provide a comprehensive range of healthcare services tailored to meet the needs of our community. From emergency care to outpatient services, we are committed to delivering exceptional medical attention.
      </p>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card service-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Emergency Care</h5>
              <p className="card-text">
                24/7 emergency services with a dedicated team of professionals to handle critical cases.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card service-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Outpatient Services</h5>
              <p className="card-text">
                Comprehensive outpatient care, including diagnostics, consultations, and treatments.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card service-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Preventive Care</h5>
              <p className="card-text">
                Preventive health checkups, vaccinations, and wellness programs for all age groups.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Card 4 */}
        <div className="col-md-4">
          <div className="card service-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Surgical Services</h5>
              <p className="card-text">
                State-of-the-art surgical facilities equipped with advanced technology and experienced surgeons.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4">
          <div className="card service-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Rehabilitation</h5>
              <p className="card-text">
                Specialized rehabilitation programs for physical and mental recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4">
          <div className="card service-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Pharmacy Services</h5>
              <p className="card-text">
                Fully stocked pharmacy offering a wide range of medicines and healthcare products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;


