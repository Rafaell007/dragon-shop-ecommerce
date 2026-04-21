import "./ShopByTheme.css";
import { ThemeCarousel } from "./carousels/carousel-by-theme/ThemeCarousel.jsx";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion,useInView } from "motion/react";


export function ShopByTheme() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
   const hasPlayed = useRef(false);
   const isInView = useInView(sectionRef, { once: true, amount: 0.1});

  useEffect(()=>{
    if (!isInView || hasPlayed.current) return;
    const title = sectionRef.current?.querySelector(".shop-theme__title");
    if(!title) return;
    hasPlayed.current = true;

    gsap.fromTo(
        title,
        { opacity: 0, x: -100},
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.inOut"},
    );
  }, [isInView]);


    
    
    return (
        <>
        <motion.div ref={sectionRef} className="shop-theme" initial={false}>
            <div className="shop-theme__header">
                <h2 ref={titleRef} className="shop-theme__title">Shop By Theme</h2>
            </div>
            <div className="shop-theme__body">
                <div className="shop-theme__carousel">
                    <ThemeCarousel  />
                </div>
            </div>
        </motion.div>
        </>
    )
}
