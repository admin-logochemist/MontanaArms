import React, { useRef, useState } from "react";
import styles from "./accountSetting.module.css";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import avatarImg from "../../assets/images/Avatar.png";
const AccountSetting = () => {
    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState("");
    const handleImageClick = () => {
        // Programmatically trigger the file input click
        fileInputRef.current.click();
      };
    
      const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // Handle the selected file as needed (e.g., upload it to a server)
        setSelectedFileName(selectedFile.name);
    
        console.log("Selected file:", selectedFile.name);
      };
  return (
    <>
      <Navbar BG={true} />
      <div className={`${styles.container} py-5`}>
        <div className="container py-5">
          <form className={`${styles.form_container}`}>
            <div className="row">
              <div className="col-lg-2  text-center">
                <SectionHeading>Account Setting</SectionHeading>
                <img
                  src={avatarImg}
                  className={`${styles.avatar_img} `}
                  alt="Upload"
                  onClick={handleImageClick}
                />
                <p className="text-light ">{selectedFileName}</p>
                 <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
              </div>
              <div className="col-lg-5 pe-lg-5 pe-3">
                <label>First Name</label>
                <input type="text" placeholder="Kevin" />

                <label>Email</label>
                <input type="text" placeholder="kevinhart@gmail.com" />

                <label>Reset Password</label>
                <input type="text" placeholder="xxxxxxxxxxxxxx" />

                <label>Country/Region</label>
                <input type="text" placeholder="USA" />

                <label>Phone Number</label>
                <input type="text" placeholder="+1-202-555-0118" />
              </div>
              <div className="col-lg-5 ps-lg-5 ">
                <label>Last Name</label>
                <input type="text" placeholder="Kevin" />

                <label>Secondary Email</label>
                <input type="text" placeholder="kevinhart@gmail.com" />

                <label>New Password</label>
                <input type="text" placeholder="xxxxxxxxxxxxxx" />

                <div
                  className={`d-flex justify-content-between ${styles.double_input_container}`}
                >
                  <div>
                    <label htmlFor="">States</label>
                    <input type="text" placeholder="California" />
                  </div>

                  <div>
                    <label htmlFor="">Zip Code</label>
                    <input type="text" placeholder="1207" />
                  </div>
                </div>

                <button className={`${styles.save_btn} `}>SAVE CHANGES</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
