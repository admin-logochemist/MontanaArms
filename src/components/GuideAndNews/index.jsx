import React from 'react'
import styles from './guide.module.css';
import images1 from '../../assets/images/g1.png';
import images2 from '../../assets/images/g2.png';
import images3 from '../../assets/images/g3.png';

import GuideNews from '../GuideNews';

const GuideAndNews = () => {
  const GuideData = [
    {
      image: images1,
      heading1: "Guide",
      para1: "Oct 23, 2023",
      para2: "Selecting firearms for home defense",
    },
    {
      image: images2,
      heading1: "Guide",
      para1: "Oct 23, 2023",
      para2: "Selecting firearms for home defense",
    },
    {
      image: images3,
      heading1: "Guide",
      para1: "Oct 23, 2023",
      para2: "Selecting firearms for home defense",
    },
  ]
  return (
    <>
      <div className={`${styles.main_guide_fluid} conatiner-fluid `}>
        <div className={`${styles.guide_container} container`}>

          <div className={`${styles.guide_section}`}>

            <div className={`${styles.guide_heading}`}>
              <h1>Guides & News</h1>
              <p>For professional insights and expertise, read our informative Guides and News articles.</p>
            </div>

            <div className={`${styles.guide_news_section_one} `}>
              {GuideData.map((item,index) => {
                return(
                  <GuideNews
                  key={index}
                  imagegun={item.image}
                  head={item.heading1}
                  spandata={item.para1}
                  para={item.para2}
                  />   
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default GuideAndNews