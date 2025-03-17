import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderData } from './Products';

const CustomSlider = () => {
  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...sliderSettings}>
        {SliderData.map((item) => (
          <div className="container" key={item.id}>
            <div className="row">
              <div className="col-7 text-center">
                <h2 style={{ textAlign: 'left', marginTop: '180px' }}>{item.title}</h2>
                <h6 style={{ textAlign: 'left' }}>{item.desc}</h6>
                <button style={{ textAlign: 'left', marginRight: '80%' }}>Visit Collections</button>
              </div>
              <div className="col-5">
                <img className="rounded float-end pt-5" src={item.cover} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CustomSlider;