import React from 'react'
import styles from "./review.module.css"
import mainImg from "../../assets/images/vidImage.png"
import CardReview from '../CardReview'
const ReviewHome = () => {
  return (
    <>
        <div className={`${styles.container} py-5`}>
            <div className={`row ${styles.row_container}`}>
                <div className="col-lg-6 px-5 py-5">
                    <CardReview />
                </div>

                <div className={`col-lg-6 ${styles.img_container} `}>

                </div>
            </div>
        </div>
    </>
  )
}

export default ReviewHome
