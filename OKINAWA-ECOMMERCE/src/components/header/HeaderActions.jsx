import { BsSearch, BsHeart, BsPerson } from "react-icons/bs";
import "./HeaderActions.css";
import { CheckoutCartButton } from "../pages/checkout/Checkout.jsx";

export function HeaderActions({ cartProducts }) {


  return (
    <>
      <div className="header-actions">
        <div className="header-actions-search">
          <a href="">
            <BsSearch />
          </a>
        </div>
        <div className="header-actions-wishlist">
          <a href="">
            <BsHeart />
          </a>
          <div className="wishlist-dropdown">
            <BsHeart />
            <p>Sign in to view your wishlist</p>
            <button>Sign in</button>
          </div>
        </div>
        <div className="header-actions-user">
          <a href="">
            <BsPerson />
          </a>
        </div>
        <CheckoutCartButton cartProducts={cartProducts} />
      </div>
    </>
  );
}
