import React from "react";
import styles from "./sliderCategory.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import img1 from "../../assets/images/c1.png";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import CategoryCard from "../CategoryCard";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div>
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
      <MdOutlineArrowBackIosNew
        className={className}
        style={{ fontSize: "100px", color: "white", top: "-80", left: "88%" }}
        onClick={onClick}
      />
    </div>
  );
};


// const NextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <StyledNextArrow
//       className={className}
//       onClick={onClick}
//     />
//   );
// };

// const PrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <StyledPrevArrow
//       className={className}
//       onClick={onClick}
//     />
//   );
// };

// const StyledNextArrow = styled(MdOutlineArrowForwardIos)`
//   color: white;

//   position: relative;
//   top: "-80px"; right: "5%";

//   @media (max-width: 768px) {
//     /* Adjust styles for smaller screens */
//     /* For example */
//     font-size: 14px;
//     right: 3%;
//   }
// `;

// const StyledPrevArrow = styled(MdOutlineArrowBackIosNew)`
//   font-size: 100px;
//   color: white;
//   left: 88%;
//   position: relative;
//   fontSize: "100px"; color: "white"; top: "-80"; left: "88%";

//   @media (max-width: 768px) {
//     /* Adjust styles for smaller screens */
//     /* For example */
//     font-size: 80px;
//     left: 85%;
//   }
// `;

const SliderCategory = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
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
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
          <CategoryCard data={item} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderCategory;
