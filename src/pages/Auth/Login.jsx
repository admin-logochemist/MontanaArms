import React from "react";
import styles from "./auth.module.css";
import logo from "../../assets/images/logo.png";
import CartImg from "../../assets/images/Cart.png";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";
import { FcGoogle } from "react-icons/fc";
import { BsApple} from "react-icons/bs";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.container} container-fluid`}>
        <div
          className={`${styles.header} pt-5  d-flex justify-content-between px-5 mx-5`}
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
          <SectionHeading>Login to your account</SectionHeading>
        </div>
        <div className={`${styles.content_container}  mt-5`}>
          <div className={`${styles.form_container} my-5`}>
            <form action="#">
                <label htmlFor="email">Email Address</label>
                <input type="email" required/>

                <div className="d-flex justify-content-between">
                <div>
                <label htmlFor="email">Password</label>
                </div>
                <div>
                <label >Forget Password</label>
                </div>
                </div>
                <input type="email" required/>

                <button type="submit" className={`${styles.login_btn}`}>LOGIN</button>

                <div className={`${styles.social_auth_btn}`}>
                    <FcGoogle className={`${styles.google_icon}`}/>
                    Login with Google
                </div>
                <div className={`${styles.social_auth_btn}`}>
                    <BsApple className={`${styles.apple_icon}`}/>
                    Login with Apple
                </div>
                
                <div className="text-center my-3">
                <span className={`${styles.dont_have_account}`}>Don't have an account</span>
                </div>

                <button type="button" onClick={()=> navigate("/signup")} className={`${styles.create_btn}`}>CREATE ACCOUNT</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
