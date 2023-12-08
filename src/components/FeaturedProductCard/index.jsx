import React, { useState } from "react";
import styles from "./featuredProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const FeaturedProductCard = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.slideInnerContainer} `}>
        <div className={`${styles.img_wrapper} `}>
        <div className={`${styles.img_container} `} onMouseOver={()=>setToggle(true)} onMouseOut={()=>{setToggle(false)}}>
          <img src={data.image} alt="" />
          {toggle && (
            <div className={`${styles.button_container}`}>
              <button className="" onClick={()=>dispatch(addToCart(data))}>Add To Cart</button>
              
              <button className="" onClick={()=>{navigate(`/product-details/${data.id}`)}}>View</button>
            </div>
          )}
        </div>
        </div>
        <p className=" pt-3 text-light">{data.title}</p>
        <span className="">{data.price}</span>
      </div>
    </>
  );
};

export default FeaturedProductCard;
