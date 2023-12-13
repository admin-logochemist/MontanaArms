import React, { useEffect } from 'react'
import styles from "./home.module.css"
import Navbar from '../../components/Navbar'
import BannerHome from '../../components/BannerHome'
import CategoryHome from '../../components/CategoryHome'
import FeaturedProductsHome from '../../components/FeaturedProductsHome'
import BrandHome from '../../components/BrandHome'
import ReviewHome from '../../components/ReviewHome'
import GuideAndNews from '../../components/GuideAndNews'
import FooterSection from "../../components/FooterSection"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addCount, addFilteredItemsCategories, addItems } from '../../redux/itemSlice'
const Home = () => {
  const dispatch = useDispatch();
  const payload = {
    Username: 99901,
    Password: "webuser1",
    POS: "I",
    // Limit: itemsPerPage,
    // Offset: (currentPage - 1) * itemsPerPage
  };
  useEffect(() => {
    getData()
  }, []);
  async function getData() {

    try {
      const apiUrl = '/api/rsrbridge/1.0/pos/get-items';

      const response = await axios.post(apiUrl, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      // setItems(response.data.Items);
      // dispatch(addItems(response.data.Items));
      dispatch(addCount(response.data.RowCount))
      // Use a Set to keep track of unique combinations
      let uniqueCombinationsSet = new Set();

      // Extracting unique combinations of CategoryId and CategoryName
      let extractedFieldsArray = response?.data?.Items.reduce((result, obj) => {
        const combination = `${obj.CategoryId}-${obj.CategoryName}`;
        if (!uniqueCombinationsSet.has(combination)) {
          uniqueCombinationsSet.add(combination);
          result.push({ CategoryId: obj.CategoryId, CategoryName: obj.CategoryName });
        }
        return result;
      }, []);

      dispatch(addFilteredItemsCategories(extractedFieldsArray));
      console.log("URL:", response.config.url);
      console.log("home response", response);
      console.log("filterCategories", extractedFieldsArray)

    } catch (error) {
      console.error("error", error);

    }
  }
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
