import React, { useState } from "react";
import styles from "./featuredProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/img-not-found.png"
import { addItem } from "../../redux/itemSlice";
const FeaturedProductCard = ({ data,category }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewItem = ()=>{
    navigate(`/product-details/${data.ManufacturerPartNumber}`)
    dispatch(addItem(data))
  }
  const image = `http://montanaarmsllc.demoapp-lc.com/categories/categoriesImages/${data.SKU}_1.jpg` ;
  
  const product = {...data, image}
  return (
    <>
      <div className={`${styles.slideInnerContainer} `}>
        <div className={`${styles.img_wrapper} `}>
        <div className={`${styles.img_container} `} onMouseOver={()=>setToggle(true)} onMouseOut={()=>{setToggle(false)}}>
          {/* <img src={img} alt="" /> */}
          <img src={`http://montanaarmsllc.demoapp-lc.com/categories/categoriesImages/${data.SKU}_1.jpg`} alt="" />
          {toggle && (
            <div className={`${styles.button_container}`}>
              <button className="" onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
              
              <button className="" onClick={handleViewItem}>View</button>
            </div>
          )}
        </div>
        </div>
        <p className=" pt-3 text-light">{data.Title}</p>
        <span className="">${data.MSRP}</span>
      </div>
    </>
  );
};

export default FeaturedProductCard;
