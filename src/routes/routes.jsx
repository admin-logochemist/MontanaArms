import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import AccountSetting from "../pages/AccountSetting";
import BillingDetails from "../pages/BillingDetails";
import Product from "../pages/Products";
import FireArmsSection from "../pages/FireArmsSection";
import PlaceOrder from "../pages/PlaceOrder";
import PaymentSection from "../pages/PaymentSection";


export const publicRoutes = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/login", element: <Login/>},
    { path: "/signup", element: <Signup/>},
    { path: "/products/:id", element: <Product/>},
    { path: "/setting", element: <AccountSetting/>},
    { path: "/billing-details", element: <BillingDetails/>},
    { path: "/product-details/:id", element: <FireArmsSection />},
    {path:"/place-order", element: <PlaceOrder/>},
    {path: "/payment-section", element: <PaymentSection/>}

]);

