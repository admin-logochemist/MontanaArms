import React from "react";
import styles from "./billingDetails.module.css";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import productImg from "../../assets/images/orderGun.png";
import paymentImg from "../../assets/images/paymentImg.png";
import FooterSetion from "../../components/FooterSection";
import { useNavigate } from "react-router-dom";

const BillingDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar BG={true} />
      <div className={`${styles.container} container-fluid`}>
        <div className="container py-5">
          <div className="row mt-5">
            <div className="col-lg-6 pe-lg-5 pe-0">
              <SectionHeading>Billing Details</SectionHeading>
              <form className={`${styles.form_container} mt-4`}>
                <label>First Name</label>
                <input type="text" required />

                <label>Last Name</label>
                <input type="text" required />

                <label>Street Address</label>
                <input type="text" required />

                <label>Apartment, floor, etc. (optional)</label>
                <input type="text" required />

                <label>Town/City</label>
                <input type="text" required />

                <label>Phone Number</label>
                <input type="text" required />

                <label>Email Address</label>
                <input type="text" required />

                <br />
                <br />

                <input type="checkbox" className={`${styles.checkbox}`} />
                <small className="text-light ms-3">
                  Save this information for faster check-out next time
                </small>
              </form>
            </div>
            <div className="col-lg-6 ps-0 ps-lg-5">
              <div
                className={`${styles.order_detail_container} p-4`}
              >
                <div className="d-flex align-items-center">
                  <div className={`${styles.product_img_container} border`}>
                    <img
                      className={`${styles.productImg_container}`}
                      src={productImg}
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <p className={`text-light ${styles.product_title} m-0`}>
                      LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56
                    </p>
                    <p
                      className={`text-light ${styles.product_price} m-0 mt-1`}
                    >
                      1 x <span>$1723</span>{" "}
                    </p>
                  </div>
                </div>

                <div
                  className={`${styles.content_container} d-flex justify-content-between`}
                >
                  <div>Subtotal:</div>
                  <div>$1,644.49</div>
                </div>

                <div
                  className={`${styles.content_container} d-flex justify-content-between mt-4`}
                >
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>

                <div
                  className={`${styles.content_container} d-flex justify-content-between mt-4`}
                >
                  <div>Total:</div>
                  <div>$1,644.49</div>
                </div>

                <div
                  className={`${styles.content_container2} mt-4 d-flex justify-content-between`}
                >
                  <div>
                    <input className={`${styles.radio_btn}`} type="radio" onChange={()=> navigate("/payment-section")} />
                    <span className="text-light ms-2 ">Bank</span>
                  </div>
                  <div>
                    <img src={paymentImg} alt="" />
                  </div>
                </div>

                <div className="mt-3">
                  <input className={`${styles.radio_btn}`} type="radio" />
                  <span className={`text-light ms-2 ${styles.cash_delivery}`}>Cash On delivery</span>
                </div>

                <div className={`${styles.coupen_container} d-flex justify-content-between mt-4`}>
                    <div><input type="text" placeholder="Coupon Code" /></div>
                    <div><button>Apply Changes</button></div>
                </div>

                <button className={`${styles.place_order_btn} mt-4`} onClick={()=> navigate("/place-order")} >PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      <FooterSetion />
      </div>
    </>
  );
};

export default BillingDetails;
