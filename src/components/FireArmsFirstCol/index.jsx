import React from 'react'
import styles from "./firstcol.module.css";
import image1 from '../../assets/images/g4.png';
import image2 from '../../assets/images/g5.png';

const FireArmsFirstCol = () => {
    return (
        <>
            <div className={`${styles.main_first_section}`}>
                <div className={`${styles.fire_left_section}`}>
                    <div className={`${styles.fire_image}`}>
                        <img src={image1} alt="" />
                    </div>
                    <div className={`${styles.fire_image}`}>
                        <img src={image1} alt="" />
                    </div>
                    <div className={`${styles.fire_image}`}>
                        <img src={image1} alt="" />
                    </div>
                </div>

                <div className={`${styles.fire_right_section}`}>
                    <div className={`${styles.fire_image_second}`}>
                        <img src={image2} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default FireArmsFirstCol