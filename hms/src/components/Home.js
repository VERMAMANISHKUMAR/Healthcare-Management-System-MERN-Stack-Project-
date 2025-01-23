import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "./Style/Home.css";
import { slider_list } from '../../src/components/assets/assets'; // Importing the images

const HomePage = () => {
  return (
    <div className='home-page'>
      {/* Slider Section */}
      <Carousel>
        {slider_list.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100 slider-image'
              src={item.menu_image}
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
