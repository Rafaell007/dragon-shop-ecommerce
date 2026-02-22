import {HeaderNavigation} from "./HeaderNavigation.jsx";
import {HeaderActions} from "./HeaderActions.jsx";
import "./Header.css";
import okinawaLogo from "../../assets/images/header/okinawa-logo.webp";
import { HeaderNavMobile } from "./HeaderNavMobile.jsx";



export function Header() {
    return (
        <>
            <div className="free-shipping-banner">
                <p>Free Shipping on Orders Over $100</p>
            </div>
            <div className="header-container">
                <HeaderNavMobile />
                <div className="header-logo" >
                    <img src={okinawaLogo} alt="okinawa logo" />
                </div>
                <HeaderNavigation />
                <HeaderActions />
            </div>
        </>
    )
}