import React from 'react'
import styles from "./sectionHeading.module.css"
const SectionHeading = ({children}) => {
  return (
  <>
    <h5 className={styles.heading}>{children}</h5>
  </>
  )
}

export default SectionHeading
