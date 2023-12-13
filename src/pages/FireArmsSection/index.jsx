import React, { useEffect, useState } from 'react'
import styles from "./fire.module.css";
import FireArmsFirstCol from '../../components/FireArmsFirstCol';
import FireArmsSecondCol from '../../components/FireArmsSecondCol';
import DescriptionSection from '../../components/DescriptionSection';
import Navbar from '../../components/Navbar';
import FooterSetion from '../../components/FooterSection';
import ReviewsSection from "../../components/ReviewsSection"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FireArmsSection = () => {
    const [itemAttributes, setItemAttributes] = useState({});
    const [catalog, setCatalog] = useState({})
    const [loader, setLoader] = useState(false)
    const { id } = useParams();
    console.log("ManPartNum ==>", id)
    useEffect(() => {
        getItemAttributes();
        getItemCatalog();
    }, [])
    const itemAttributesPayload = {
        Username: 99901,
        Password: "webuser1",
        POS: "I",
        LookupBy: "M",
        ManPartNum: id
    }
    const itemCatalogPayload = {
        Username: 99901,
        Password: "webuser1",
        POS: "I",
        LookupBy: "M",
        ManPartNum: id
    }
    async function getItemAttributes() {
        setLoader(true)
        try {
            const apiUrl = '/api/rsrbridge/1.0/pos/get-item-attributes';
            const response = await axios.post(apiUrl, itemAttributesPayload, {
                headers: { 'Content-Type': 'application/json' },
            });
            setItemAttributes(response.data);
            // console.log("URL:", response.config.url);
            console.log("attributes response =>", response);
            setLoader(false)
        } catch (error) {
            console.error("attributes error", error);
            setLoader(false)
        }
    }
    async function getItemCatalog() {
        setLoader(true)
        try {
            const apiUrl = '/api/rsrbridge/1.0/pos/check-catalog';
            const response = await axios.post(apiUrl, itemCatalogPayload, {
                headers: { 'Content-Type': 'application/json' },
            });
            setCatalog(response.data);
            // console.log("URL:", response.config.url);
            console.log("catalog response =>", response);
            setLoader(false)
        } catch (error) {
            console.error("catalog error", error);
            setLoader(false)
        }
    }
    return (
        <>
            <Navbar BG={true} />
            <div className={`${styles.main_fire_fluid} container-fluid pt-5`}>
                <div className={`${styles.fire_container} container`}>
                    <div className={`${styles.fire_row} row `}>
                        <div className={`${styles.fire_section_one} col-lg-6 col-md-12 `}>
                            <FireArmsFirstCol />
                        </div>

                        <div className={`${styles.fire_section_two} col-lg-6 col-md-12`}>
                            {loader ? <>
                                <div className="text-center mt-5">
                                    <div className="spinner-border text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                
                            </> : <FireArmsSecondCol itemAttributes={itemAttributes} catalog={catalog} />
                            }
                        </div>

                    </div>
                    {loader ? <>
                        <div className="text-center mt-5">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </> :
                        <DescriptionSection itemAttributes={itemAttributes} catalog={catalog} />
                    }
                    <ReviewsSection />
                </div>
            </div>
            <FooterSetion />
        </>
    )
}

export default FireArmsSection