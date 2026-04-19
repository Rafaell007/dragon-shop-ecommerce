import "./Header.css";
import { useCart } from "../../context/CartContext";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BarContent } from "./BarContent.jsx";

export function Header() {

    const headerRef = useRef(null);
    const [showSticky, setShowSticky] = useState(false);
    const { cartProducts } = useCart();

    useEffect(() => {
        const element = headerRef.current;
        if (!element) return;
        const observer = new IntersectionObserver(
            ([entry]) => setShowSticky(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="site-header__shipping">
                <p className="site-header__shipping-text">Free Shipping on Orders Over $200</p>
            </div>

            <div ref={headerRef} className="site-header__bar">
                <BarContent cartProducts={cartProducts} />
            </div>

            <AnimatePresence>
                {showSticky && (
                    <motion.div
                        className="site-header__bar site-header__bar--sticky"
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <BarContent cartProducts={cartProducts} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
