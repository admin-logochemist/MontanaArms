import React from "react";
import styles from "./sliderFeaturedProducts.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/c1.png";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import CategoryCard from "../CategoryCard";
import FeaturedProductCard from "../FeaturedProductCard";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div>
      {/* <i className="fas fa-arrow-right" style={{ fontSize: '1px', background: 'black' }} /> */}
      <MdOutlineArrowForwardIos
        className={className}
        style={{ color: "white", top: "-80", right: "5%" }}
        onClick={onClick}
      />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div style={{ background: "black" }}>
      {/* <i className="fas fa-arrow-right" style={{ fontSize: '1px', background: 'black' }} /> */}
      <MdOutlineArrowBackIosNew
        className={className}
        style={{ fontSize: "100px", color: "white", top: "-80", left: "88%" }}
        onClick={onClick}
      />
    </div>
  );
};

const SliderFeaturedProducts = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((item, key) => (
        <div key={key} className={`${styles.slideContainer} `}>
            <FeaturedProductCard data={item} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderFeaturedProducts;
