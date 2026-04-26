import { Link } from "react-router";
import { HeaderNavMobile } from "./HeaderNavMobile.jsx";
import { HeaderNavigation } from "./HeaderNavigation.jsx";
import { HeaderActions } from "./HeaderActions.jsx";
import LogoDragon from "../../assets/images/logo/Dragon-Shop-Logo.webp";

export function BarContent({ cartProducts, isScrollingDown = true }) {
    return (
        <>
            <HeaderNavMobile />
            <div className="site-header__logo">
                <Link to="/"><img src={LogoDragon} alt="Dragon Shop Logo" /></Link>
            </div>
            <HeaderNavigation isScrollingDown={isScrollingDown} />
            <HeaderActions cartProducts={cartProducts} />
        </>
    );
}
