import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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

const ProductSection = ({ category ,id, toggleSideBar, setToggleSideBar, gunsProductData }) => {
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 24;
  const [loader, setLoader] = useState(true);
  // for filter on search 
  const [userInput, setUserInput] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  const payload = {
    Username: 99901,
    Password: "webuser1",
    POS: "I",
    Departments: id
    // Limit: itemsPerPage,
    // Offset: (currentPage - 1) * itemsPerPage
  };

  useEffect(() => {
    getData()
  }, [id]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  
  async function getData() {
    setLoader(true);
    try {
      const apiUrl = '/api/rsrbridge/1.0/pos/get-items';

      const response = await axios.post(apiUrl, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      setItems(response.data.Items);

      const calculatedTotalPages = Math.ceil(response.data.RowCount / itemsPerPage);
      // set Total Pages
      setTotalPages(calculatedTotalPages);
      

      // console.log("URL:", response.config.url);
      console.log("response", response);
      setLoader(false)
    } catch (error) {
      console.error("error", error);
      setLoader(false);
    }
  }
// Assuming you want to display only a portion of the data based on the current page
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedData = items.slice(startIndex, endIndex);

 // filter function
//  const handleInputChange = (event) => {
//   const input = event.target.value;
//   setUserInput(input);

//   const filteredResults = items.filter(obj =>
//     obj.Title.toLowerCase().includes(input.toLowerCase())
//   );

//   setItems(filteredResults);
// };
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
              // value={userInput}
              // onChange={handleInputChange}
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
        {
          loader ?
            <div className="text-center mt-5">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <div className="d-flex flex-wrap justify-content-center justify-content-sm-between mt-5">
              {displayedData && displayedData.map((item, key) => (
                <div key={key} className={`${styles.img_container}`}>
                  <FeaturedProductCard category={category} data={item} key={key} />
                </div>
              ))}
            </div>
        }


        {loader ? " " :
          <div className="d-flex justify-content-center my-4">
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={currentPage}
                color="primary"
                onChange={handlePageChange}

                sx={{
                  "& .MuiPaginationItem-root": {
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "gray",
                    },
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#3361E1",
                    color: "white",
                  },
                }}
              />
            </Stack>
          </div>
        }
      </div>
    </>
  );
};

export default ProductSection;
