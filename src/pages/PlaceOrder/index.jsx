import React from 'react'
import styles from "./placeOrder.module.css"
import Navbar from '../../components/Navbar'
import FooterSetion from '../../components/FooterSection'
import checkCircle from "../../assets/images/CheckCircle.png"
const PlaceOrder = () => {
  return (
    <>
        <Navbar BG={true}/>
        <div className={`${styles.container} container-fluid py-5`}>
            <div className='container text-center py-5'>
                <img src={checkCircle} alt="" />
                <h5 className='pt-4 pb-2'>Your order is successfully place</h5>
                <small>Order No : 7891234</small>
                <br />
                <br />
                <small>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</small>
            </div>
            </div>
        <FooterSetion />
    </>
  )
}

export default PlaceOrder
