import React from 'react'
import styles from './cardReview.module.css'
import SectionHeading from '../SectionHeading'
import profle1 from "../../assets/images/profile1.png"
import sliderDots from "../../assets/images/sliderDots.png"
const CardReview = () => {
  return (
        <>
            <div className={`${styles.container} text-center py-5`}>
                <SectionHeading>What  Clients  Say</SectionHeading>
                <p className={`${styles.message} mt-3`}>The best selection with the best prices. Thanks for the service! Guys are <br />
                knowledgeable, and easily helped with the right choice! I armed myself with a <br />
                pistol, and I feel safe. I will continue to shop here.
                </p>

                <img className={`${styles.profileImg}`} src={profle1} alt="" />

                <p className='mb-1 mt-3'>Henry Jones</p>

                <p className={`${styles.client_rev}`}>
                Client, NY
                </p>
                
                <img className={`img-fluid ${styles.sliderDots}`} src={sliderDots} alt="" />
            </div>
        </>
  )
}

export default CardReview
