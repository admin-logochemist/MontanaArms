import React from 'react'
import styles from "./cartItem.module.css"
import binIcon from "../../assets/images/bin_icon.png"
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'
import c1 from '../../assets/images/c1.png'
import img from '../../assets/images/img-not-found.png'
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    console.log(item)
    dispatch(removeFromCart(item.UPC))
  }

  return (
    <>
      <div className={`${styles.container} container-fluid border-bottom`}>
        <div className="row py-3 ">
          <div className="col-4">
            <div className={`${styles.product_img_container} `} >
              {/* <img className={`${styles.product_img} `} src={item.image} alt="" /> */}
               <img className={`${styles.product_img} `} src={img} alt="" />
            </div>
          </div>
          <div className="col-6 pt-3 ">
            <p className={`${styles.title} mb-1`}>{item.Title}</p>
            <span className={`${styles.price}`}>$ {item.MSRP}</span>
          </div>
          <div className="col-2 px-0 pt-3">
            <img onClick={() => removeItem()} className={`${styles.bin_icon}`} src={binIcon} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default CartItem
