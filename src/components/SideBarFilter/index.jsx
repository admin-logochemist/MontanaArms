import React, { useState } from "react";
import styles from "./sideBarFilter.module.css";
import { IoMdClose } from "react-icons/io";
const SideBarFilter = ({toggleSideBar, setToggleSideBar, setGunsProductData, gunsProductData}) => {
  const [rangeValue, setRangeValue] = useState(50);
  const handleRangeChange = (e)=>{
    setRangeValue(e.target.value)

    const updatedData = gunsProductData.filter((item)=>item.price >= e.target.value)
    setGunsProductData(updatedData)
  }
  return (
    <>
      <div className={toggleSideBar ? `${styles.container} ${styles.sideBar_sm_show} pe-4`: `${styles.container} ${styles.sideBar_sm_hide} pe-4`}>
        { toggleSideBar &&
        <div className="text-end">
          <IoMdClose onClick={()=>setToggleSideBar(false)} />
        </div>
        }
        <div className={`${styles.section_heading} mt-5`}>CATEGORY</div>

        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">All</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">LWRC</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">Kershaw</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">LWRC</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">Kershaw</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">LWRC</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">Kershaw</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" /> <label htmlFor="">LWRC</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">Kershaw</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">LWRC</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">Kershaw</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">LWRC</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" /> <label htmlFor="">Kershaw</label>
        </div>
        {/* ---------------- */}
        <div className={`${styles.section_heading} mt-5`}>PRICE RANGE</div>
        <div className={`my-3 ${styles.range_container}`}>
          <span className={`${styles.rangeValue}`}>$ {rangeValue}</span>
          <input
            className={`${styles.range_input}`}
            type="range"
            name="rangeInput"
            min="0"
            max="200"
            step="1"
            value={rangeValue}
            onChange={handleRangeChange}
          />
        </div>
        <div className={`${styles.range_btn} d-flex`}>
          <div className="me-1">
            <input type="text" placeholder="Min price" />
          </div>
          <div className="ms-1">
            <input type="text" placeholder="Max price" />
          </div>
        </div>

        {/* ---------------- */}
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">All Price</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">Under $500</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">$200 to $700</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">$1000 to $3000</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">$3000 to $5000</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">$5000 to $10,000</label>
        </div>
        <div className={`${styles.radio_container}`}>
          <input type="radio" name="filter" />{" "}
          <label htmlFor="">$10,000 to $20,000</label>
        </div>
      </div>
    </>
  );
};

export default SideBarFilter;
