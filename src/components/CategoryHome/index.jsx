import React from 'react'
import styles from "./category.module.css"
import SectionHeading from '../SectionHeading'
import Paragraph from '../Paragraph'
import SliderCategory from '../SliderCategory'

import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import c5 from "../../assets/images/c5.png";

const slider1Data = [
    {image: c1, title: "Firearms"},
    {image: c2, title: "Gun Parts"},
    {image: c3, title: "Ammunition"},
    {image: c4, title: "Optics"},
    {image: c5, title: "Gear"},
    {image: c1, title: "Firearms"},
    {image: c2, title: "Gun Parts"},
    {image: c3, title: "Ammunition"},
    {image: c4, title: "Optics"},
    {image: c5, title: "Gear"},
]
const CategoryHome = () => {
  return (
    <>
    
        <div className={`${styles.container} container`}>
            <SectionHeading>Shop By Category</SectionHeading>
            <div className='pt-2'></div>
            <Paragraph >Choose Your Favorite Category From Our Wide Selection Of Products To Browse The Equipment You Need.</Paragraph>
            <div className='pt-5'></div>
            
            <SliderCategory data={slider1Data} />
        </div>
    </>
  )
}

export default CategoryHome
