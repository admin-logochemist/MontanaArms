import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import SectionHeading from "../SectionHeading";

import logo from "../../assets/images/logo.png";
import UserImg from "../../assets/images/User.png";
import CartImg from "../../assets/images/Cart.png";
import profileImg from "../../assets/images/profile1.png";
import { RxHamburgerMenu } from "react-icons/rx";
// --
import Badge from "@mui/material/Badge";
import SideBarCart from "../SideBarCart";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../redux/cartSlice";
// --
const Navbar = ({ BG }) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // const [toggleSideCart, setToggleSideCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItemLength = useSelector(state=> state.cart.items.length)
  const categories = useSelector(state=> state.item.filteredItem)
  console.log("categories",categories)
  return (
    <>
      {/* <SideBarCart toggleSideCart={toggleSideCart} setToggleSideCart={setToggleSideCart} /> */}
      <SideBarCart />
      <nav
        className={
          BG
            ? `navbar navbar-expand-lg navbar_container ${styles.backgroundNav}`
            : `navbar navbar-expand-lg navbar_container ${styles.backgroundTrans}`
        }
      >
        <div className="container py-2">
          <a className="navbar-brand">
            <img className={styles.logoImg} src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span ></span> */}
            <RxHamburgerMenu className="navbar-toggler-icon text-light"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink
                  to="/"
                  // className="nav-link"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/5,1,6,12,22,7"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Firearms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/18"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Ammunition
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/41,32,34,42"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Gun Parts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/35,14,33,10,11,19,20,21,39,36,40,30,13,38,4,27"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Accessories
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/products/4"
                  // className="nav-link"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                  aria-current="page"
                >
                  Tasers
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to={"/products/8,9"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Optics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/25,26"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Safety Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/23"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Knives & Tools
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/products/15"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Reloading
                </NavLink>
              </li>
              
              {/* {categories.map((item,key)=>(
                 <li className="nav-item">
                 <NavLink
                   to={`/products/${item.CategoryId}`}
                   className={({ isActive }) =>
                     isActive
                       ? `${styles.nav_item_active} nav-link`
                       : `${styles.nav_item} nav-link`
                   }
                 >
                   {item.CategoryName}
                 </NavLink>
               </li>
              ))} */}
            </ul>

            {/* left-end */}

            <ul className={`navbar-nav d-flex ${styles.nav_side_section}`}>
              <li className="nav-item user_icon_li">
                {/* <FiShoppingCart className={styles.shop_icon} /> */}
                <img
                  className="nav_icons"
                  src={UserImg}
                  onClick={() => setToggleLogin(!toggleLogin)}
                  alt=""
                />
              </li>

              <li className="nav-item ps-0 pt-3 pt-lg-0 ps-lg-3 pe-lg-5 cart_icon_li">
                <Badge badgeContent={cartItemLength} color="primary">
                  <img className="nav_icons" onClick={()=> dispatch(openCart())} src={CartImg} alt="" />
                </Badge>
                {/* <NavLink
                  to={"/*"}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link`
                      : `${styles.nav_item} nav-link`
                  }
                >
                  Contact US
                </NavLink> */}
              </li>
              {toggleLogin &&
                (isLogin ? (
                  <div
                    className={`${styles.auth_container_box} text-center p-4`}
                  >
                    <h6 className="mb-3">Sign in to your account</h6>
                    <button
                      className={`${styles.login_btn}`}
                      onClick={() => navigate("/login")}
                    >
                      LOGIN
                    </button>
                    <br />
                    <br />
                    <span>Don't have an account</span>
                    <br />
                    <br />
                    <button
                      className={`${styles.create_account_btn}`}
                      onClick={() => navigate("/signup")}
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                ) : (
                  <div className={`${styles.auth_container_box} p-4`}>
                    <div
                      className={`${styles.auth_container} d-flex align-items-center`}
                    >
                      <div>
                        <img src={profileImg} alt="" />
                      </div>
                      <div className="ms-3">
                        <p className="mb-0 text-light">Kewin Hart</p>
                        <Link to={"/setting"}>Edit Profile</Link>
                      </div>
                    </div>

                    <button className={`${styles.login_btn} mt-3`}>
                      LOG OUT
                    </button>
                    <br />
                    <br />
                    <span>Don't have an account</span>
                    <br />
                    <br />
                    <button
                      className={`${styles.create_account_btn}`}
                      onClick={() => navigate("/signup")}
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <li
                className="nav-item dropdown_parent_li"
                onMouseEnter={toggleDropdown3}
                onMouseLeave={toggleDropdown3}
              >
                <NavLink
                  to="/about/1"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.nav_item_active} nav-link dropdown-toggle`
                      : `${styles.nav_item} nav-link dropdown-toggle`
                  }
                >
                  About
                </NavLink>

                {isDropdownOpen3 && (
                  <div className={` ${styles.dropdown} dropdown`}>
                 
                    <ul className="pt-2 news_ul_list">
                      <NavLink to="/about/2" className="nav-links">
                        <li>Upstormed Estates</li>
                      </NavLink>
                      <NavLink to="/about/3" className="nav-links">
                        <li>Upstormed Apparel</li>
                      </NavLink>
                      <NavLink to="/about/4" className="nav-links">
                        <li>Upstormed Records</li>
                      </NavLink>
                      <NavLink to="/about/5" className="nav-links">
                        <li>Upstormed Books</li>
                      </NavLink>
                      <NavLink to="/about/6" className="nav-links">
                        <li>Jonathan Anthony Burkett</li>
                      </NavLink>
                    </ul>
                  </div>
                )}
              </li> */
}
