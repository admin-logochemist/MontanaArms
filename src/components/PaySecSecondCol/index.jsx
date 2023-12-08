import React from 'react'
import styles from "./paysecond.module.css";
import image5 from '../../assets/images/g6.png';
import { useNavigate } from 'react-router-dom';


const PaySecSecondCol = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.payment_card_section}`}>
                <div className={`${styles.payment_card}`}>
                    <div className={`${styles.lwrc_section}`}>
                        <div className={`${styles.lwrc_image}`}>
                            <img src={image5} alt="" />
                        </div>
                        <div className={`${styles.lwrc_heading}`}>
                            <h1>LWRC 16" BLACK DIRECT IMPINGEMENT RIFLE 5.56</h1>
                            <div className={`${styles.lwrc_price}`}>
                                <h1>1 x <span>$1723</span></h1>
                            </div>
                        </div>
                    </div>


                    <div className={`${styles.sub_total_section}`}>
                        <div className={`${styles.price_details}`}>
                            <div className={`${styles.price_head}`}>
                                <h1>Sub-total</h1>
                            </div>
                            <div className={`${styles.price_dollar}`}>
                                <p>$1723</p>
                            </div>
                        </div>

                        <div className={`${styles.price_details}`}>
                            <div className={`${styles.price_head1}`}>
                                <h1>Shipping</h1>
                            </div>
                            <div className={`${styles.price_dollar1}`}>
                                <p>Free</p>
                            </div>
                        </div>

                        <div className={`${styles.price_details}`}>
                            <div className={`${styles.price_head1}`}>
                                <h1>Discount</h1>
                            </div>
                            <div className={`${styles.price_dollar1}`}>
                                <p>$24</p>
                            </div>
                        </div>

                        <div className={`${styles.price_details}`}>
                            <div className={`${styles.price_head1}`}>
                                <h1>Tax</h1>
                            </div>
                            <div className={`${styles.price_dollar1}`}>
                                <p>$123</p>
                            </div>
                        </div>

                        <div className={`${styles.price_details}`}>
                            <div className={`${styles.price_head2}`}>
                                <h1>Total</h1>
                            </div>
                            <div className={`${styles.price_dollar2}`}>
                                <p>$1,723 USD</p>
                            </div>
                        </div>

                    </div>

                    <div className={`${styles.border_line_price}`}></div>

                    <div className={`${styles.place_order_btn}`}>
                        <button onClick={()=> navigate("/place-order")}>PLACE ORDER</button>
                    </div>

                </div>


            </div>
        </>
    )
}

export default PaySecSecondCol