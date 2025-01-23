import React from 'react';
import './Style/About.css';
import { Carousel } from 'react-bootstrap';
import docterimg_1 from "../components/assets/AboutsImage/docterimg-1.jpg"
import docterimg_2 from "../components/assets/AboutsImage/docterimg-2.jpg"
import docterimg_3 from "../components/assets/AboutsImage/docterimg-3.jpg"
// import teamImage from '../assets/team.jpg'; // Replace with actual images
// import missionImage from '../assets/mission.jpg'; // Replace with actual images
// import facilityImage from '../assets/facility.jpg'; // Replace with actual images

const About = () => {
  return (
    <div className="about-container container py-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center mb-5">
        Our mission is to revolutionize healthcare delivery through compassion, innovation, and excellence. We are committed to the well-being of our patients, offering comprehensive services with state-of-the-art facilities and an experienced team.
      </p>

      {/* Mission and Vision Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={docterimg_1}
            alt="Our Mission"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Our Mission</h3>
          <p>
            Our mission is to provide patient-centered care with a focus on advanced medical technology and compassionate service. We strive to create a healthier world, one patient at a time.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img
            src={docterimg_2}
            alt="Our Team"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3 className="mb-3">Meet Our Team</h3>
          <p>
            Our team consists of highly skilled and dedicated professionals who are passionate about providing exceptional care. From doctors to support staff, we work together to ensure the best outcomes for our patients.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section text-center mt-5">
        <h2 className="mb-4">Our Core Values</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="value-card p-3 shadow rounded">
              <h5>Compassion</h5>
              <p>Caring for patients with empathy and respect.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card p-3 shadow rounded">
              <h5>Innovation</h5>
              <p>Embracing technology to improve healthcare delivery.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="value-card p-3 shadow rounded">
              <h5>Integrity</h5>
              <p>Maintaining the highest standards of honesty and ethics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section mt-5">
        <h2 className="text-center mb-4">Gallery</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded shadow"
              src={docterimg_1}
              alt="Facility 1"
            />
            <Carousel.Caption>
              <h5>State-of-the-Art Facilities</h5>
              <p>Our advanced facilities ensure the best care for our patients.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded shadow"
              src={docterimg_2}
              alt="Facility 2"
            />
            <Carousel.Caption>
              <h5>Dedicated Team</h5>
              <p>Meet our team of skilled and caring professionals.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded shadow"
              src={docterimg_3}
              alt="Facility 3"
            />
            <Carousel.Caption>
              <h5>Our Mission</h5>
              <p>Striving for a healthier world, one patient at a time.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
