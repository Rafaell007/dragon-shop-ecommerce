import "./ShopByStyle.css";
import shopMen from "../../../assets/images/home/shop-men.webp";
import shopWomen from "../../../assets/images/home/shop-women.webp";
import shopKids from "../../../assets/images/home/shop-kids.webp";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";

export function ShopByStyle() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const hasPlayed = useRef(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  useEffect(() => {
    if (!isInView || hasPlayed.current) return;
    const animationElement = headerRef.current;
    if (!animationElement) return;

    hasPlayed.current = true;

    gsap.fromTo(
      animationElement,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.inOut" },
    );
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="shop-style"
    >
      <motion.div ref={headerRef} className="shop-style__header" initial={false}>
        <h2 className="shop-style__title">Shop By Style</h2>
      </motion.div>
      <div className="shop-style__grid">
        <div className="shop-style__card">
          <img className="shop-style__image" src={shopMen} alt="shop men" />
          <div className="shop-style__label"> 
            <p className="shop-style__label-text">Men</p>
            <BsArrowRight className="shop-style__label-icon" />
          </div>
        </div>
        <div className="shop-style__card">
          <img className="shop-style__image" src={shopWomen} alt="shop women" />
          <div className="shop-style__label">
            <p className="shop-style__label-text">Women</p>
            <BsArrowRight className="shop-style__label-icon" />
          </div>
        </div>
        <div className="shop-style__card">
          <img className="shop-style__image" src={shopKids} alt="shop kids" />
          <div className="shop-style__label">
            <p className="shop-style__label-text">Kids</p>
            <BsArrowRight className="shop-style__label-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
