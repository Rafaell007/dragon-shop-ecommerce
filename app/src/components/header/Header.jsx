import "./Header.css";
import { useCart } from "../../context/CartContext";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BarContent } from "./BarContent.jsx";

const SCROLL_DIRECTION_THRESHOLD_PX = 6;

export function Header() {

    const headerRef = useRef(null);
    const lastScrollYRef = useRef(0);
    const [mainBarInView, setMainBarInView] = useState(true);
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const { cartProducts } = useCart();

    const showSticky = !mainBarInView && isScrollingDown;

    useEffect(() => {
        const element = headerRef.current;
        if (!element) return;
        const observer = new IntersectionObserver(
            ([entry]) => setMainBarInView(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        lastScrollYRef.current = window.scrollY;

        const onScroll = () => {
            const current = window.scrollY;
            const delta = current - lastScrollYRef.current;
            if (Math.abs(delta) < SCROLL_DIRECTION_THRESHOLD_PX) return;
            lastScrollYRef.current = current;
            setIsScrollingDown(delta > 0);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <div className="site-header__shipping">
                <p className="site-header__shipping-text">Free Shipping on Orders Over $200</p>
            </div>

            <div ref={headerRef} className="site-header__bar">
                <BarContent
                    cartProducts={cartProducts}
                    isScrollingDown={isScrollingDown}
                />
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
                        <BarContent
                            cartProducts={cartProducts}
                            isScrollingDown={isScrollingDown}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
