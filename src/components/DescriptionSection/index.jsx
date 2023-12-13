import React from 'react'
import styles from "./descrip.module.css";

const DescriptionSection = ({itemAttributes, catalog}) => {
    return (
        <>
            <div className={`${styles.main_fluid} conatiner-fluid`}>
                <div className={`${styles.main_container} container`}>
                    <div className={`${styles.description_section}`}>
                        <div className={`${styles.descrip_heading}`}>
                            <h1>Description</h1>
                        </div>

                        <div className={`${styles.descrip_note_section}`}>
                            <div className={`${styles.note_heading}`}>
                                <p>Note: This product must be shipped to an Federal Firearms Licensed Dealer (FFL Dealer)</p>
                            </div>
                            <div className={`${styles.descrip_features}`}>
                                <p>Features:</p>
                                <div className={`${styles.features_list_item}`}>
                                    <ul>
                                        {itemAttributes && itemAttributes?.Attributes?.map((item,key)=>  <li>{item.Name} • {item.Value}</li>)} 
                                    </ul>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default DescriptionSection