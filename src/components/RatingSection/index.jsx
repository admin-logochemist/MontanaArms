import React from 'react'
import styles from "./rating.module.css";
import image1 from '../../assets/images/star.png'
import image2 from '../../assets/images/dotimages.png'
import image3 from '../../assets/images/check.png'

const RatingSection = () => {
    const Data = [
        {
            starImg: image1,
            dottedImg: image2,
            text1: "Samantha D.",
            checkImg: image3,
            text2: "Lorem ipsum dolor sit amet consectetur. Enim tristique mauris felis porttitor. Risus sapien hendrerit adipiscing hac enim faucibus leo magna. Nullam arcu mus arcu tempus.",
            text3: "Posted on August 14, 2023",
        },

        {
            starImg: image1,
            dottedImg: image2,
            text1: "Samantha D.",
            checkImg: image3,
            text2: "Lorem ipsum dolor sit amet consectetur. Enim tristique mauris felis porttitor. Risus sapien hendrerit adipiscing hac enim faucibus leo magna. Nullam arcu mus arcu tempus.",
            text3: "Posted on August 14, 2023",
        },

        {
            starImg: image1,
            dottedImg: image2,
            text1: "Samantha D.",
            checkImg: image3,
            text2: "Lorem ipsum dolor sit amet consectetur. Enim tristique mauris felis porttitor. Risus sapien hendrerit adipiscing hac enim faucibus leo magna. Nullam arcu mus arcu tempus.",
            text3: "Posted on August 14, 2023",
        },
    ]
    return (
        <>
            {Data.map((item, index) => {
                return (

                    <div key={index} className={`${styles.rating_sub_section}`}>
                        <div className={`${styles.reviews_ratings}`}>
                            <div className={`${styles.rating_images}`}>
                                <img src={item.starImg} alt="" />
                            </div>
                            <div className={`${styles.dotted_images}`}>
                                <img src={item.dottedImg} alt="" />
                            </div>
                        </div>

                        <div className={`${styles.rating_checkbox}`}>
                            <div className={`${styles.rating_heading}`}>
                                <h1>{item.text1}</h1>
                            </div>
                            <div className={`${styles.checkbox_images}`}>
                                <img src={item.checkImg} alt="" />
                            </div>
                        </div>

                        <div className={`${styles.rating_content}`}>
                            <p>{item.text2}</p>

                            <div className={`${styles.post_content}`}>
                                <p>{item.text3}</p>
                            </div>

                        </div>
                    </div>


                )
            })}

        </>
    )
}

export default RatingSection