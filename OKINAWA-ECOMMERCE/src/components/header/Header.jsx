import {HeaderNavigation} from "./HeaderNavigation.jsx";
import "./Header.css";
import okinawaLogo from "../../assets/images/header/okinawa-logo.webp";
import  {BsSearch, BsHeart, BsPerson, BsCart} from "react-icons/bs";


export function Header() {
    return (
        <>
            <div className="free-shipping-banner">
                <p>Free Shipping on Orders Over $100</p>
            </div>
            <div className="header-container">
                <div className="header-logo" >
                    <img src={okinawaLogo} alt="okinawa logo" />
                </div>
                <HeaderNavigation />
          
                <div className="header-actions">
                    <div className="header-actions-search">
                        <a href=""><BsSearch /></a>
                       
                    </div>
                    <div className="header-actions-wishlist">
                        <a href=""><BsHeart /></a>
                    </div>
                    <div className="header-actions-user">
                        <a href=""><BsPerson /></a>
                    </div>
                    <div className="header-actions-cart">
                        <a href=""><BsCart /></a>
                    </div>
                </div>
            </div>
        </>
    )
}