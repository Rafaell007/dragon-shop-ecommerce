import { BsSearch, BsHeart, BsPerson } from "react-icons/bs";
import "./HeaderActions.css";
import { CheckoutCartButton } from "../pages/checkout/Checkout.jsx";
import { Link } from "react-router";

export function HeaderActions({ cartProducts }) {


  return (
    <>
      <div className="header-actions">
        <div className="header-actions__search">
          <a className="header-actions__icon-link" href="">
          <Link to="/products" state={{ focusSearch: true }}> <BsSearch /></Link>
          </a>
        </div>
        <div className="header-actions__wishlist">
          <a className="header-actions__icon-link" href="">
            <BsHeart />
          </a>
          <div className="header-actions__wishlist-popup">
            <BsHeart />
            <p className="header-actions__wishlist-text">Sign in to view your wishlist</p>
            <button type="button" className="header-actions__wishlist-btn">Sign in</button>
          </div>
        </div>
        <div className="header-actions__account">
          <a className="header-actions__icon-link" href="">
            <BsPerson />
          </a>
        </div>
        <CheckoutCartButton cartProducts={cartProducts} />
      </div>
    </>
  );
}
