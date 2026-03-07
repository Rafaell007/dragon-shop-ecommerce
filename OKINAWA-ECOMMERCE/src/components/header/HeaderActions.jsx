import { BsSearch, BsHeart, BsPerson, BsCart } from "react-icons/bs";
import "./HeaderActions.css";

export function HeaderActions({cartProducts}) {

  let totalQuantity = 0;

  cartProducts.forEach((cartItem)=>{
    totalQuantity += cartItem.quantity;
    console.log(cartProducts);
    
  })

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
        <div className="header-actions-cart">
          <a href="">
            <BsCart />
          </a>
          
          <div className="cart-count">
            <span>{totalQuantity}</span> 
          </div>
        </div>
      </div>
    </>
  );
}
