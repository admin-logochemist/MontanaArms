import React from 'react'
import styles from "./fire.module.css";
import FireArmsFirstCol from '../../components/FireArmsFirstCol';
import FireArmsSecondCol from '../../components/FireArmsSecondCol';
import DescriptionSection from '../../components/DescriptionSection';
import Navbar from '../../components/Navbar';
import FooterSetion from '../../components/FooterSection';
import ReviewsSection from "../../components/ReviewsSection"
import { useDispatch } from 'react-redux';

const FireArmsSection = () => {

    return (
        <>
            <Navbar BG={true}/>
            <div className={`${styles.main_fire_fluid} container-fluid pt-5`}>
                <div className={`${styles.fire_container} container`}>
                    <div className={`${styles.fire_row} row `}>
                        <div className={`${styles.fire_section_one} col-lg-6 col-md-12 `}>
                            <FireArmsFirstCol/>
                        </div>

                        <div className={`${styles.fire_section_two} col-lg-6 col-md-12`}>
                            <FireArmsSecondCol/>
                        </div>

                    </div>
                    <DescriptionSection/>
                    <ReviewsSection />
                </div>
            </div>
            <FooterSetion />
        </>
    )
}

export default FireArmsSection