import {HeaderNavigation} from "./HeaderNavigation.jsx";
import {HeaderActions} from "./HeaderActions.jsx";
import "./Header.css";
import LogoDragon from "../../assets/images/logo/Dragon-Shop-Logo.webp";
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
            <div className="site-header__shipping">
                <p className="site-header__shipping-text">Free Shipping on Orders Over $200</p>
            </div>
            
            <div className="site-header__bar" ref={headerRef}>
                <HeaderNavMobile />
                <div className="site-header__logo" >
                   <Link to="/"> <img src={LogoDragon} alt="Dragon Shop Logo" /> </Link> 
                </div>
                <HeaderNavigation />
                <HeaderActions cartProducts = {cartProducts} />
            </div>
            <AnimatePresence>
                {showSticky && (
                    <motion.div className="site-header__bar site-header__bar--sticky"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: "ease" }}
                    >
                    <HeaderNavMobile />
                    <div className="site-header__logo" >
                       <Link to="/"> <img src={LogoDragon} alt="Dragon Shop Logo" /> </Link> 
                    </div>
          <HeaderNavigation />
          <HeaderActions cartProducts={cartProducts} />
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
