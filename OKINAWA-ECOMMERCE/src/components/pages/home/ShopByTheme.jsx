import "./ShopByTheme.css";
import { ThemeCarousel } from "./carousels/carousele-by-theme/ThemeCarousel.jsx";

export function ShopByTheme() {
    

    return (
        <>
        <div className="wrapper ">
            <div className="shop-by-theme-header">
                <h2>Shop By Theme</h2>
            </div>
            <div className="shop-by-theme-container">
                <div className="theme-carousel-container">
                    <ThemeCarousel  />
                </div>
            </div>
        </div>
        </>
    )
}