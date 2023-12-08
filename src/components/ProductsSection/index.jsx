import React from "react";
import styles from "./productsSection.module.css";
import searchIcon from "../../assets/images/MagnifyingGlass.png";
import FeaturedProductCard from "../FeaturedProductCard";
// ---------------
import gun1 from "../../assets/images/gun1.png";
import gun2 from "../../assets/images/gun2.png";
import gun3 from "../../assets/images/gun3.png";
import gun4 from "../../assets/images/gun4.png";
// --
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// --

import { RxHamburgerMenu } from "react-icons/rx";
// ---------------
// const gunsProductData = [
//   {
//     id: 1,
//     image: gun1,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 30.6,
//   },
//   {
//     id: 2,
//     image: gun2,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 45.2,
//   },
//   {
//     id: 3,
//     image: gun3,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 55.8,
//   },
//   {
//     id: 4,
//     image: gun4,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 75.5,
//   },
//   {
//     id: 5,
//     image: gun1,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 99.99,
//   },
//   {
//     id: 6,
//     image: gun2,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 199.5,
//   },
//   {
//     id: 7,
//     image: gun3,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 120.75,
//   },
//   {
//     id: 8,
//     image: gun4,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 150.25,
//   },
//   {
//     id: 9,
//     image: gun1,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 80.4,
//   },
//   {
//     id: 10,
//     image: gun2,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 299.99,
//   },
//   {
//     id: 11,
//     image: gun3,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 180.6,
//   },
//   {
//     id: 12,
//     image: gun4,
//     title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
//     price: 250.0,
//   },
// ];


const ProductSection = ({ toggleSideBar, setToggleSideBar, gunsProductData }) => {
  return (
    <>
      <RxHamburgerMenu
        onClick={() => setToggleSideBar(true)}
        className={`${styles.side_bar_icon}`}
      />
      <div className={`${styles.container} ps-lg-5 ps-0 pt-5`}>
        <div
          className={`${styles.search_section} d-flex justify-content-between flex-wrap`}
        >
          <div className={`${styles.search_div}`}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for anything..."
            />
            <img src={searchIcon} alt="" />
          </div>

          <div className={`${styles.sort_div}`}>
            <label htmlFor="">Sort by:</label>
            <select>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        <div
          className={`${styles.filter_section} mt-4 d-flex justify-content-between`}
        >
          <div>
            <span>Active Filter: </span>
          </div>
          <div>
            <span>65,867 Result found.</span>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center justify-content-sm-between mt-5">
          {gunsProductData.map((item, key) => (
            <div className={`${styles.img_container}`}>
              <FeaturedProductCard data={item} key={key} />
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center my-4">
          <Stack spacing={2}>
            <Pagination
              count={6}
              color="primary"
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "white", // Change the background color for non-active pages
                  "&:hover": {
                    backgroundColor: "gray", // Change the background color for non-active pages on hover
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "#3361E1", // Change the background color for the active page
                  color: "white", // Change the text color for the active page
                },
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
