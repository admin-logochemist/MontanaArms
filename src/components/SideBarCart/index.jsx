import React, { useState } from "react";
import styles from "./sideBarCart.module.css";
import cartImg from "../../assets/images/cartDark.png";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import { useNavigate } from "react-router-dom";
import { closeCart } from "../../redux/cartSlice";

const SideBarCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.items);
  const toggleSideCart = useSelector((state)=> state.cart.show);
  const navigate = useNavigate();
  console.log(data);
  return (
    <>
      <div
        className={
          toggleSideCart ? `${styles.container}` : `${styles.container_hide}`
        }
      >
        <div
          className={`${styles.header} d-flex align-items-center justify-content-between`}
        >
          <div className="ms-3">
            <img src={cartImg} alt="" />
            <span className="ms-3 ">MY CART</span>
          </div>
          <div className="me-3">
            <AiOutlineClose
              onClick={() => dispatch(closeCart())}
              className={`${styles.cancel_icon}`}
            />
          </div>
        </div>

        {data.length != 0 ? (
          <div
            className={` ${styles.cart_detail_container}`}
          >
            <div className={`${styles.cart_item_container}`}>
              {data.map((item, key) => (
                <CartItem item={item} key={key} />
              ))}
            </div>

            <div
              className={`${styles.sub_total_section} border-top px-5 p-3 `}
            >
                <div className="d-flex justify-content-between pb-0 mb-0">
                  <p>SUBTOTAL</p>
                  <p className={`${styles.total_ammout}`}>$1,644.49</p>
                </div>
                <span className={`${styles.shipping_text}`}>Shipping, taxes & Discount codes calculated at checkout.</span>
                <div className="mt-3">
                  <input type="checkbox" name="" id="" />
                  &nbsp;<span className={`${styles.label_checkbox}`}>I agree with the terms & conditions</span>
                </div>

                <button className={`${styles.checkout_btn} mt-5`} onClick={()=> navigate("/billing-details")} >CHECKOUT</button>

            </div>
          </div>
        ) : (
          <p className="text-center mt-5">YOUR CART IS CURRENTLY EMPTY.</p>
        )}
      </div>
    </>
  );
};

export default SideBarCart;
