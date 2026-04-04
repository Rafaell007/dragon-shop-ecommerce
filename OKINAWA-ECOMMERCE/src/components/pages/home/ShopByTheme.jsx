import "./ShopByTheme.css";
import { ThemeCarousel } from "./carousels/carousele-by-theme/ThemeCarousel.jsx";
import { useRef } from "react";

export function ShopByTheme() {
    
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    return (
        <>
        <div ref={sectionRef} className="shop-theme">
            <div className="shop-theme__header">
                <h2 ref={titleRef} className="shop-theme__title">Shop By Theme</h2>
            </div>
            <div className="shop-theme__body">
                <div className="shop-theme__carousel">
                    <ThemeCarousel  />
                </div>
            </div>
        </div>
        </>
    )
}
