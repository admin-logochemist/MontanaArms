import React from 'react'
import styles from "./payment.module.css";
import PaySecFirstCol from '../../components/PaySecFirstCol';
import PaySecSecondCol from '../../components/PaySecSecondCol';
import Navbar from '../../components/Navbar';
import FooterSetion from '../../components/FooterSection';


const PaymentSection = () => {
    return (
        <>
        <Navbar BG={true}/>
            <div className={`${styles.main_fluid_pay} py-5 conatiner-fluid`}>
                <div className={`${styles.main_container_pay} container`}>
                    <div className={`${styles.pay_row} row`}>
                        <div className={`${styles.pay_col_one} col-lg-8 col-md-12`}>
                            <PaySecFirstCol />
                        </div>

                        <div className={`${styles.pay_col_two} col-lg-4 col-md-12`}>
                            <PaySecSecondCol />
                        </div>
                    </div>
                </div>
            </div>
        <FooterSetion />
        </>
    )
}

export default PaymentSection