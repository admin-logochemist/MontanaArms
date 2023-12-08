import React from "react";
import styles from "./featuredProductHome.module.css";
import Paragraph from "../Paragraph";
import SectionHeading from "../SectionHeading";
import SliderFeaturedProducts from "../SliderFeaturedProducts";
import c1 from "../../assets/images/knife1.png";
import c2 from "../../assets/images/knife2.png";
import c3 from "../../assets/images/knife3.png";
import c4 from "../../assets/images/knife4.png";
import c5 from "../../assets/images/knife5.png";

const slider1Data = [
    {image: c1, title: "Kershaw Volt Stainless Steel Folding Knife3655 | 087171033785", price:"$30.92"},
    {image: c2, title: "Kershaw Shuffle Knife Teal8700TEALBW | 087171038728" , price:"$17.12"},
    {image: c3, title: "Kershaw Volt Stainless Steel Folding Knife3655 | 087171033785", price: "$30.92"},
    {image: c4, title: "Kershaw Ember Pocketknife3560 | 087171036908", price: "$30.92"},
    {image: c5, title: "Kershaw Ember Pocketknife3560 | 087171036908", price: "$30.92"},
    {image: c1, title: "Kershaw Volt Stainless Steel Folding Knife3655 | 087171033785", price:"$30.92"},
    {image: c2, title: "Kershaw Shuffle Knife Teal8700TEALBW | 087171038728" , price:"$17.12"},
    {image: c3, title: "Kershaw Volt Stainless Steel Folding Knife3655 | 087171033785", price: "$30.92"},
    {image: c4, title: "Kershaw Ember Pocketknife3560 | 087171036908", price: "$30.92"},
    {image: c5, title: "Kershaw Ember Pocketknife3560 | 087171036908", price: "$30.92"},
  
]
const FeaturedProductsHome = () => {
  return (
    <>
      <div className={`${styles.container} container`}>
        <SectionHeading>Featured Products</SectionHeading>
        <div className="pt-2"></div>
        <Paragraph>
        Browse Through The Best Guns And Finest Equipment Now! Experience The Best In Performance And Design.
        </Paragraph>
        <div className='pt-5'></div>
        <SliderFeaturedProducts data={slider1Data}/>
      </div>
    </>
  );
};

export default FeaturedProductsHome;
