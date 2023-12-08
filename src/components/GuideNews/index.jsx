import React from 'react'
import styles from "./news.module.css";
import image from '../../assets/images/g1.png';


const GuideNews = ({ imagegun, head, spandata, para, GuidenewsData }) => {
    return (
        <>
            <div className={`${styles.main_guide_container}`}>
                <div className={`${styles.guide_news} `}>
                    <div className={`${styles.guide_images} `}>
                        <img src={imagegun} alt="" />
                    </div>

                    <div className={`${styles.guide_news_heading}`}>
                        <div className={`${styles.guide_border_line}`}></div>
                        <h1>{head} <span>{spandata}</span> </h1>
                    </div>

                    <div className={`${styles.guide_content}`}>
                        <p>{para}</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default GuideNews