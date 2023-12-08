import React from 'react'
import styles from "./seccol.module.css";
import image3 from '../../assets/images/Heart.png';
import image4 from '../../assets/images/Copy.png';
import image5 from '../../assets/images/Facebook.png';
import image6 from '../../assets/images/Twitter.png';
import image7 from '../../assets/images/Pinterest.png';
import image8 from '../../assets/images/star.png';
import image9 from '../../assets/images/Minus.png';
import image10 from '../../assets/images/Plus.png';
import image11 from '../../assets/images/ShoppingCart.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, openCart } from '../../redux/cartSlice';
import gunImg from "../../assets/images/gun1.png"
const FireArmsSecondCol = () => {
    const [productQty, setProductQty] = useState(0);
    // const [openForm , setOpenForm] = useState(false);
    const [isHeartHovered, setIsHeartHovered] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleClickMinusQty = () => {
        if (productQty > 0) {
            setProductQty(productQty - 1);
        };

    }
    const handleClickPlusQty = () => {
        if (productQty + 1) {
            setProductQty(productQty + 1);
        };

    }
    const addToTheCart = ()=>{
        dispatch(addToCart({id:20,image:gunImg,title:'LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56',price:"1644"}));
        dispatch(openCart());
    }

    return (
        <>
            <div className={`${styles.product_section}`}>
                <div className={`${styles.product_wishlist}`}>
                    <div className={`${styles.heart_wishlist_section}`}>
                        <div className={`${styles.heart_images} `}>
                            <img src={image3} alt="" />
                        </div>
                        <div className={`${styles.login_heading}`}>
                            <p>Login to add your wishlist</p>
                        </div>
                    </div>

                    <div className={`${styles.product_icons}`}>
                        <div className={`${styles.share_heading}`}>
                            <p>Share product:</p>
                        </div>
                        <div className={`${styles.icon_pro_image}`}>
                            <img src={image4} alt="" />
                        </div>
                        <div className={`${styles.icon_pro_image}`}>
                            <img src={image5} alt="" />
                        </div>
                        <div className={`${styles.icon_pro_image}`}>
                            <img src={image6} alt="" />
                        </div >
                        <div className={`${styles.icon_pro_image}`}>
                            <img src={image7} alt="" />
                        </div>
                    </div>

                </div>

                <div className={`${styles.lwrc_section}`}>
                    <div className={`${styles.lwrc_heading}`}>
                        <h1>LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56</h1>

                    </div>

                </div>

                <div className={`${styles.reviews_section}`}>
                    <div className={`${styles.review_heading}`}>
                        <h1>$1,644.49</h1>
                    </div>
                    <div className={`${styles.start_rating}`}>
                        <img src={image8} alt="" />
                    </div>
                    <div className={`${styles.ratings_points}`}>
                        <p>(150 Reviews)</p>

                    </div>

                </div>


                <div className={`${styles.product_code_section}`}>
                    <div className={`${styles.product_code}`}>
                        <h1>Product Code: <span>ICDIR5B16</span></h1>
                    </div>
                    <div className={`${styles.product_code}`}>
                        <h1>UPC: <span>00855193006786</span></h1>
                    </div>
                    <div className={`${styles.product_code}`}>
                        <h1>Brand: <span>LWRC</span></h1>

                    </div>
                    <div className={`${styles.product_availbility}`}>
                        <h1>Availability: <span>In Stock</span></h1>
                    </div>

                </div>

                <div className={`${styles.product_quantity_section}`}>
                    <div className={`${styles.product_width}`}>

                        <div className={`${styles.pro_in_plus_minus}`}>
                            <div className={`${styles.minus_points}`} onClick={handleClickMinusQty}>
                                <img src={image9} alt="" />
                            </div>
                            <div className={`${styles.product_qty}`}>
                                <p>{productQty}</p>
                            </div>
                            <div className={`${styles.plus_points}`} onClick={handleClickPlusQty}>
                                <img src={image10} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`${styles.add_to_cart}`}>
                    <div className={`${styles.add_to_cart_btn}`}>
                        <button onClick={addToTheCart}>ADD TO CART<img src={image11} alt="" /></button>
                        
                    </div>
                    

                </div>



                <div className={`${styles.buy_now}`}>
                    <div className={`${styles.buy_now_btn}`}>
                        <button onClick={()=>navigate("/billing-details")}>BUY NOW</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FireArmsSecondCol