import "./ShopByTheme.css";
import { ThemeCarousel } from "./carousels/carousele-by-theme/ThemeCarousel.jsx";

export function ShopByTheme() {
    

    return (
        <>
        <div className="shop-theme">
            <div className="shop-theme__header">
                <h2 className="shop-theme__title">Shop By Theme</h2>
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
