import "./ShopByStyle.css";
import shopMen from "../../../assets/images/home/shop-men.webp";
import shopWomen from "../../../assets/images/home/shop-women.webp";
import shopKids from "../../../assets/images/home/shop-kid.webp";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { Link } from "react-router";
import gsap from "gsap";

export function ShopByStyle() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let played = false;

    const tryPlay = () => {
      if (played) return;
      const rect = header.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom > 0) {
        played = true;
        window.removeEventListener("scroll", tryPlay);
        gsap.fromTo(header,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.inOut" }
        );
      }
    };

    window.addEventListener("scroll", tryPlay, { passive: true });
    // fallback: covers page load already at/near section (after layout settles)
    const t = setTimeout(tryPlay, 1000);

    return () => {
      window.removeEventListener("scroll", tryPlay);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="shop-style">
      <div ref={headerRef} className="shop-style__header">
        <h2 className="shop-style__title">Shop By Style</h2>
      </div>
      <div className="shop-style__grid">
        <div className="shop-style__card">
          <img className="shop-style__image" src={shopMen} alt="shop men" />
          <Link to="/products/category/men" className="shop-style__label">
            <p className="shop-style__label-text">Men</p>
            <BsArrowRight className="shop-style__label-icon" />
          </Link>
        </div>
        <div className="shop-style__card">
          <img className="shop-style__image" src={shopWomen} alt="shop women" />
          <Link to="/products/category/women" className="shop-style__label">
            <p className="shop-style__label-text">Women</p>
            <BsArrowRight className="shop-style__label-icon" />
          </Link>
        </div>
        <div className="shop-style__card">
          <img className="shop-style__image" src={shopKids} alt="shop kids" />
          <Link to="/products/category/tops" className="shop-style__label">
            <p className="shop-style__label-text">Kids</p>
            <BsArrowRight className="shop-style__label-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
