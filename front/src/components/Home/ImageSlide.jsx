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
        <Slider {...settings}>
          <NavLink to='/test'>
          <div className="slide-item">
            <img
              className="slide-item-img"
              src="/Image/hobby.jpg"
              alt="Hobby"
            />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img
              className="slide-item-img"
              src="/Image/language.jpg"
              alt="Language"
            />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img
              className="slide-item-img"
              src="/Image/sports.jpg"
              alt="Sports"
            />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img className="slide-item-img" src="/Image/tour.jpg" alt="Tour" />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img className="slide-item-img" src="/Image/work.jpg" alt="Work" />
          </div>
          </NavLink>
          <NavLink to='/test'>
          <div className="slide-item">
            <img className="slide-item-img" src="/Image/IT2.jpg" alt="IT" />
          </div>
          </NavLink>
        </Slider>
      </div>
    );
  }
}
