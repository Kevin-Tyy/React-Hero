import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from "./Sdata";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CustomNext = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
const CustomPrev = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
};

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
  };
  return (
    <>
      <div className="slide">
        <h2> Single Item</h2>
        <Slider {...settings}>
          {Sdata.map((value) => {
            return (
              <div className="box">
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="text">
                  <span>{value.category}</span>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Slide;
