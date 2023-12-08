import React, { useState } from 'react'
import styles from "./payfirst.module.css";
import image1 from '../../assets/images/venmo.png';
import image2 from '../../assets/images/paypal.png';
import image3 from '../../assets/images/amazon.png';
import image4 from '../../assets/images/DCC.png';

const PaySecFirstCol = () => {

 


    return (
        <>
            <div className={`${styles.main_payment_section}`}>
                <div className={`${styles.payment_heading}`}>
                    <h1>Payment Option</h1>
                </div>

                <div className={`${styles.payment_section_cards}`}>
                    <div className={`${styles.payment_section_images}`}>
                        <div className={`${styles.venmo_image}`}>
                            <img src={image1} alt="" />
                            <div className={`${styles.radio_btn}`}>
                                <input className={`${styles.toothRadio}`} type="radio" name="radio" id="" />
                            </div>
                            <div className={`${styles.line_vertical}`}></div>
                        </div>
                    </div>

                    <div className={`${styles.payment_section_images}`}>

                        <div className={`${styles.venmo_image}`}>
                            <img src={image2} alt="" />
                            <div className={`${styles.radio_btn}`}>
                                <input className={`${styles.toothRadio}`} type="radio" name="radio" id="" />
                            </div>
                            <div className={`${styles.line_vertical}`}></div>
                        </div>

                    </div>

                    <div className={`${styles.payment_section_images}`}>

                        <div className={`${styles.venmo_image}`}>
                            <img src={image3} alt="" />
                            <div className={`${styles.radio_btn}`}>
                                <input className={`${styles.toothRadio}`} type="radio" name="radio" id="" />
                            </div>
                            <div className={`${styles.line_vertical}`}></div>
                        </div>

                    </div>

                    <div className={`${styles.payment_section_images}`}>
                        <div className={`${styles.venmo_image}`}>
                            <img src={image4} alt="" />
                            {/* <div className={`${styles.radio_btn}`}>
                                <input type="radio" name="" id="" />
                            </div> */}
                            <div className={`${styles.radio_btn}`}>
                                <input className={`${styles.toothRadio}`} type="radio" name="radio" id="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`${styles.input_sections}`}>
                    <div className={`${styles.card_entry_number}`}>
                        <div className={`${styles.input_heading}`}>
                            <h1>Name on Card</h1>
                        </div>
                        <div className={`${styles.input_card_number}`}>
                            <form action="">
                                <input type="text" name="" id="" />
                            </form>
                        </div>
                    </div>

                    <div className={`${styles.card_entry_number}`}>
                        <div className={`${styles.input_heading}`}>
                            <h1>Card Number</h1>
                        </div>
                        <div className={`${styles.input_card_number}`}>
                            <form action="">
                                <input type="text" name="" id="" />
                            </form>
                        </div>
                    </div>

                    <div className={`${styles.expiry_date}`}>

                        <div className={`${styles.input_expiry_form}`}>
                            <div className={`${styles.expiry_heading}`}>
                                <h1>Expire Date</h1>
                            </div>
                            <div className={`${styles.expiry_date_input_form}`}>
                                <form action="">
                                    <input type="text" name='' id='' />
                                </form>
                            </div>
                        </div>
                        <div className={`${styles.input_expiry_form}`}>
                            <div className={`${styles.expiry_heading}`}>
                                <h1>CVC</h1>
                            </div>
                            <div className={`${styles.expiry_date_input_form}`}>
                                <form action="">
                                    <input type="text" name='' id='' />
                                </form>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PaySecFirstCol