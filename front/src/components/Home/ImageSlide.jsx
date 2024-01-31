
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/ImageSlide.css";
import { NavLink } from "react-router-dom";
export default class ImageSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div>
        <Slider {...settings} style={{width: '100%'}}>
          <NavLink to='/test'>
          <div className="slide-item">
            <img
              className="slide-item-img"
              src="/Image/silder/life.jpg"
              alt="life"
            />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img
              className="slide-item-img"
              src="/Image/silder/language.jpg"
              alt="Language"
            />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img
              className="slide-item-img"
              src="/Image/silder/sport.jpg"
              alt="Sport"
            />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img className="slide-item-img" src="/Image/silder/tour.jpg" alt="Tour" />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img className="slide-item-img" src="/Image/silder/work.jpg" alt="Work" />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img className="slide-item-img" src="/Image/silder/IT2.jpg" alt="IT" />
          </div>
          </NavLink>
        </Slider>
      </div>
    );
  }
}