import React from 'react'
import styles from "./descrip.module.css";

const DescriptionSection = () => {
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
                                        <li>Caliber: 5.56 Nato</li>
                                        <li>Barrel Length 16.1"</li>
                                        <li>LWRCI • Modular One-Piece Free-float Rail</li>
                                        <li>LWRCI • Rail Panels angled foregrip and Hand Stop Included</li>
                                        <li>NiCorr Treated LWRCI • Gas Block</li>
                                        <li>LWRCI • Cold Hammer-Forged Nicorr Treated Spiral Fluted 16.1 • Barrel</li>
                                        <li>A2 Flash Hider • Type III Hardcoat Anodized Finish</li>
                                        <li>Magpul MOE+ Grip & Magpul Pmag Included</li>
                                        <li>LWRCI • Monoforge • Upper Receiver • LWRCI • Advanced Trigger Guard</li>
                                        <li>Fully Ambidextrous Lower Controls: Mag Release Bolt Catch & Selector</li>
                                        <li>Mil-Spec 6 Position Buffer Tube & LWRCI • Compact Stock W/ QD Sling Mounts</li>
                                        <li>LWRCI • Ambidextrous Charging Handle</li>
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