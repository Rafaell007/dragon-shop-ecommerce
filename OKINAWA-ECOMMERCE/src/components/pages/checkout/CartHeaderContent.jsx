import { LiaShippingFastSolid } from "react-icons/lia";
import { motion } from "motion/react";
import "./CartHeaderContent.css";

export function CartHeaderContent({ cartProducts }) {
  const FREE_SHIPPING_THRESHOLD = 200;

  let totalPrice = 0;
  cartProducts.forEach((cartItem) => {
    totalPrice += (cartItem.priceCents / 100) * cartItem.quantity;
  });

  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - totalPrice, 0);
  const progress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const isFreeShipping = remaining === 0;

  return (
    <>
      <div className="cart-header-container">
        <div className="cart-header">
          <h2>Cart</h2>
          <div className="cart-sidebar-close">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close mobile menu"
            >
              X
            </button>
          </div>
        </div>
        <div className="free-shipping-container">
          <p>
            {isFreeShipping
              ? "Free shipping unlocked!"
              : <>Add<strong> {remaining.toFixed(2)} $</strong> to unlock free shipping</>}
          </p>

          
          <div className="free-shipping-bar-road">
            <motion.div
              className="free-shipping-icon"
              initial={{ left: 0 }}
              animate={{ left: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <LiaShippingFastSolid />
            </motion.div>
            <div className="free-shipping-text">
                <p>Free shipping</p>
            </div>

            <motion.div
              className="free-shipping-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
