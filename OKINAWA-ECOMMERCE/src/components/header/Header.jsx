import {HeaderNavigation} from "./HeaderNavigation.jsx";
import {HeaderActions} from "./HeaderActions.jsx";
import "./Header.css";
import okinawaLogo from "../../assets/images/header/okinawa-logo.webp";
import { HeaderNavMobile } from "./HeaderNavMobile.jsx";
import { useCart } from "../../context/CartContext";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";



export function Header() {

    const headerRef = useRef(null);

    const [ showSticky, setShowSticky] = useState(false);
    
    useEffect(()=>{
        const element = headerRef.current;
        if (!element) return;
        const observer = new IntersectionObserver(
            ([entry]) => setShowSticky(!entry.isIntersecting),
            { threshold: 0}
        )
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const {cartProducts} = useCart();

    return (
        <>
            <div className="free-shipping-banner">
                <p>Free Shipping on Orders Over $100</p>
            </div>
            
            <div className="header-container" ref={headerRef}>
                <HeaderNavMobile />
                <div className="header-logo" >
                   <Link to="/"> <img src={okinawaLogo} alt="okinawa logo" /> </Link> 
                </div>
                <HeaderNavigation />
                <HeaderActions cartProducts = {cartProducts} />
            </div>
            <AnimatePresence>
                {showSticky && (
                    <motion.div className="header-container header-sticky"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: "ease" }}
                    >
                    <HeaderNavMobile />
                    <div className="header-logo" >
                        <img src={okinawaLogo} alt="okinawa logo" />
                    </div>
                    <HeaderNavigation />
                    <HeaderActions cartProducts = {cartProducts} />
                </motion.div>

                )}
            </AnimatePresence>
        </>
    )
}