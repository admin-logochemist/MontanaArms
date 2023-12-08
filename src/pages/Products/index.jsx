import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideBarFilter from "../../components/SideBarFilter";
import ProductSection from "../../components/ProductsSection";


import gun1 from "../../assets/images/gun1.png";
import gun2 from "../../assets/images/gun2.png";
import gun3 from "../../assets/images/gun3.png";
import gun4 from "../../assets/images/gun4.png";
import axios from "axios";





const Product = () => {
  const [gunsProductData,setGunsProductData] = useState([
    {
      id: 1,
      image: gun1,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 30.6,
    },
    {
      id: 2,
      image: gun2,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 45.2,
    },
    {
      id: 3,
      image: gun3,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 55.8,
    },
    {
      id: 4,
      image: gun4,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 75.5,
    },
    {
      id: 5,
      image: gun1,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 99.99,
    },
    {
      id: 6,
      image: gun2,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 199.5,
    },
    {
      id: 7,
      image: gun3,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 120.75,
    },
    {
      id: 8,
      image: gun4,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 150.25,
    },
    {
      id: 9,
      image: gun1,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 80.4,
    },
    {
      id: 10,
      image: gun2,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 299.99,
    },
    {
      id: 11,
      image: gun3,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 180.6,
    },
    {
      id: 12,
      image: gun4,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 250.0,
    },
    {
      id: 1,
      image: gun1,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 30.6,
    },
    {
      id: 2,
      image: gun2,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 45.2,
    },
    {
      id: 3,
      image: gun3,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 55.8,
    },
    {
      id: 4,
      image: gun4,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 75.5,
    },
    {
      id: 5,
      image: gun1,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 99.99,
    },
    {
      id: 6,
      image: gun2,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 199.5,
    },
    {
      id: 7,
      image: gun3,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 120.75,
    },
    {
      id: 8,
      image: gun4,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 150.25,
    },
    {
      id: 9,
      image: gun1,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 80.4,
    },
    {
      id: 10,
      image: gun2,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 299.99,
    },
    {
      id: 11,
      image: gun3,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 180.6,
    },
    {
      id: 12,
      image: gun4,
      title: 'LWRC 16" Black Direct Impingement Rifle 5.56 | 00855193006786',
      price: 250.0,
    },
  ]);

  const { id } = useParams();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  
  const payload = {
    "Username": 99901,
    "Password": "webuser1",
    "POS": "I",
    "Limit": 5
  };
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("https://test.rsrgroup.com/api/rsrbridge/1.0/pos/get-items", payload, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data); 
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <Navbar BG={true} />
      <div className={`${styles.container_main} container-fluid`}>
        <div className={`container ${styles.container}`}>
          <SideBarFilter toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar} gunsProductData={gunsProductData} setGunsProductData={setGunsProductData} />
          <ProductSection toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}  gunsProductData={gunsProductData} setGunsProductData={setGunsProductData}/>
        </div>
      </div>
    </>
  );
};

export default Product;