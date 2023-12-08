import React from 'react'
import styles from './brand.module.css'
import SectionHeading from '../SectionHeading'

import brandImg1 from "../../assets/images/brand1.png"
import brandImg2 from "../../assets/images/brand2.png"
import brandImg3 from "../../assets/images/brand3.png"
import brandImg4 from "../../assets/images/brand4.png"
// import brandImg5 from "../../assets/images/brand5.png"
import brandImg5 from "../../assets/images/brand6.png"
import brandImg6 from "../../assets/images/brand7.png"

const imagesData = [brandImg1,brandImg2,brandImg3,brandImg4,brandImg5,brandImg6]

const BrandHome = () => {
  return (
    <>
        <div className={`${styles.container} container-fluid my-5 py-5`}>
          <div className='container'>
          
            <div className='text-center mb-5 mb-lg-0'>
            <SectionHeading>Shop By Brand</SectionHeading>
            </div>

            <div className='d-flex flex-wrap justify-content-around align-items-center'>
            {imagesData.map((item,key)=>(
                <div key={key} className='px-4'>
                <img className='img-fluid' src={item} />
                </div>
            ))}
            </div>
            </div>
        </div>
    </>
  )
}

export default BrandHome
