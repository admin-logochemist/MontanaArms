import React from 'react'
import styles from "./footer.module.css";
import image from '../../assets/images/logo.png';
import image1 from '../../assets/images/f1.png';
import image2 from '../../assets/images/t1.png';
import image3 from '../../assets/images/y1.png';
import image4 from '../../assets/images/tel.png';



const FooterSetion = () => {
    return (
        <>
            <div className={`${styles.main_container} conatiner-fluid`}>
                <div className={`${styles.fluid_footer} container`}>
                    <div className={`${styles.row_footer} row`}>

                        <div className={`${styles.section_one} col-lg-4 col-md-12`}>
                            <div className={`${styles.section_one_footer}`}>
                                <div className={`${styles.footer_logo}`}>
                                    <img src={image} alt="" />
                                </div>
                                <div className={`${styles.footer_content}`}>
                                    <p>Our clients know we're the best, because we offer a great gun selection & top-quality products for all shooting sports. Everything you need is available.</p>
                                </div>
                                <div className={`${styles.footer_social_icons}`}>
                                    <div className={`${styles.social_icons_images}`}>
                                        <img src={image1} alt="" />
                                        <img src={image2} alt="" />
                                        <img src={image3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section_two} col-lg-2 col-md-6 col-sm-12`}>
                            <div className={`${styles.quick_links}`}>
                                <h1>Quick Links</h1>
                                <div className={`${styles.quick_links_list}`}>
                                    <ul>
                                        <li>Home</li>
                                        <li>Ammunition</li>
                                        <li>Gun Parts</li>
                                        <li>Accessories</li>
                                        <li>Dirty Gears</li>
                                        <li>Optics</li>
                                        <li>Safety Products</li>
                                        <li>Knives & Tools</li>
                                        <li>Firearms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section_two} col-lg-2 col-md-6 col-sm-12`}>
                            <div className={`${styles.quick_links}`}>
                                <h1>Categories</h1>
                                <div className={`${styles.quick_links_list}`}>
                                    <ul>
                                        <li>Cheek Rests</li>
                                        <li>Choke Tubes</li>
                                        <li>Conversion kits</li>
                                        <li>Grips and recoil pads</li>
                                        <li>Rails</li>
                                        <li>Slings</li>
                                        <li>Stocks and Forends</li>
                                        <li>Swivels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.section_three} col-lg-4 col-md-12`}>
                            <div className={`${styles.main_section_three}`}>
                                <div className={`${styles.footer_newsletter}`}>
                                    <h1>Subscribe to our newsletter</h1>
                                    <p>Our weekly newsletter provides you with the latest and most important happenings in the industry.</p>
                                </div>
                                <div className={`${styles.footer_conatct}`}>
                                    <div className={`${styles.tel_image_icon}`}>
                                        <img src={image4} alt="" />
                                    </div>
                                    <div className={`${styles.tel_number}`}>
                                        <p>406-296-3140</p>
                                    </div>
                                </div>
                                <div className={`${styles.footer_forms_fields}`}>
                                    <form action="">
                                        <input type="text" placeholder='Enter your e-mail address heres' />
                                        <button onClick={(e)=>e.preventDefault()}>Subscribe</button>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default FooterSetion