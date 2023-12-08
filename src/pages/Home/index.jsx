import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../components/Navbar'
import BannerHome from '../../components/BannerHome'
import CategoryHome from '../../components/CategoryHome'
import FeaturedProductsHome from '../../components/FeaturedProductsHome'
import BrandHome from '../../components/BrandHome'
import ReviewHome from '../../components/ReviewHome'
import GuideAndNews from '../../components/GuideAndNews'
import FooterSection from "../../components/FooterSection"
const Home = () => {
  return (
    <>
      <BannerHome />
      <div className={`${styles.container} container-fluid`}>
      <CategoryHome />
      <FeaturedProductsHome />
      <BrandHome />
      <ReviewHome />
      <GuideAndNews />
      <FooterSection />
      </div>
    </>
  )
}

export default Home
