import React from 'react'
import styles from "./buttonPrimary.module.css"
const ButtonPrimary = ({children}) => {
  return (
    <>
        <button className={styles.button}>{children}</button>
    </>
  )
}

export default ButtonPrimary
