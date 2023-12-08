import React from "react";
import styles from "./bannerHome.module.css";
import Navbar from "../Navbar";
import ButtonPrimary from "../ButtonPrimary";
const BannerHome = () => {
  return (
    <>
      <div className={styles.container}>
        <Navbar BG={false} />

        <div className={`${styles.banner_detail} d-flex justify-content-center align-items-center text-center`}>
          <div>
          <h1>welcome to Montana arms</h1>
          <p className="mt-1">
            Our clients know we're the best, because we offer a great gun
            selection & top-quality products for all shooting sports. <br /> Everything
            you need is available.
          </p>
          <ButtonPrimary>SHOP NOW</ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome;
