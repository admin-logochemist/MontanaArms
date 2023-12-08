import React from "react";
import styles from "./auth.module.css";
import logo from "../../assets/images/logo.png";
import CartImg from "../../assets/images/Cart.png";
import SectionHeading from "../../components/SectionHeading";
import { FcGoogle } from "react-icons/fc";
import { BsApple} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className={`${styles.container} container-fluid pb-5`}>
        <div
          className={`${styles.header} pt-5 d-flex justify-content-between px-5 mx-5`}
        >
          <div>
            <img
              className={`${styles.logo}`}
              onClick={() => navigate("/")}
              src={logo}
              alt=""
            />
          </div>
          <div className="d-flex align-items-center">
            <img src={CartImg} alt="" />
          </div>
        </div>

        <div className="text-center mt-5">
          <SectionHeading>Create an account</SectionHeading>
        </div>
        <div className={`${styles.content_container} mt-5`}>
        
          <div className={`${styles.form_container} my-5`}>
            <form action="#">
              <label htmlFor="fname">First Name</label>
              <input type="text" required />

              <label htmlFor="lname">Last Name</label>
              <input type="text" required />

              <label htmlFor="emai">Email Address</label>
              <input type="email" required />

              <label htmlFor="email">Password</label>
              <input type="password" required />

              <label htmlFor="email">Confirm Password</label>
              <input type="password" required />

              <button type="submit" className={`${styles.login_btn}`}>REGISTER</button>

              <div className={`${styles.social_auth_btn}`}>
                    <FcGoogle className={`${styles.google_icon}`}/>
                    Login with Google
                </div>
                <div className={`${styles.social_auth_btn}`}>
                    <BsApple className={`${styles.apple_icon}`}/>
                    Login with Apple
                </div>
                <div className="text-center my-3">
                <span className={`${styles.dont_have_account}`}>Already have an account</span>
                </div>

                <button onClick={()=> navigate("/login")} className={`${styles.login_btn}`}>LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
