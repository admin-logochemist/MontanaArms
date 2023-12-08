import React from 'react'
import styles from "./categoryCard.module.css"
const CategoryCard = ({data}) => {
  return (
    <>
         <div className={`${styles.slideInnerContainer} `}>
            <div className={`${styles.img_container}`}>
              <img src={data.image} alt="" />
            </div>
            <p className="text-center pt-3">{data.title}</p>
          </div>
    </>
  )
}

export default CategoryCard
