import { LiaShippingFastSolid } from "react-icons/lia";
import { motion } from "motion/react";
import { useCart } from "../../../context/CartContext";
import "./CartHeaderContent.css";

export function CartHeaderContent({ setIsOpen }) {
  const { totalPrice } = useCart();
  const FREE_SHIPPING_THRESHOLD = 200;

  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - totalPrice, 0);
  const progress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const isFreeShipping = remaining === 0;

  

  return (
    
    <>
      <div className="mini-cart__header">
        <div className="mini-cart__title-row">
          <h2 className="mini-cart__title">Cart</h2>
          <div className="mini-cart__close">
            <button
              type="button"
              className="mini-cart__close-btn"
              aria-label="Close mobile menu"  onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>
        </div>
        <div className="mini-cart__shipping">
          <p className="mini-cart__shipping-text">
            {isFreeShipping
              ? "Free shipping unlocked!"
              : <>Add<strong> {remaining.toFixed(2)} $</strong> to unlock free shipping</>}
          </p>

          
          <div className="mini-cart__progress-track">
            <motion.div
              className="mini-cart__progress-icon"
              initial={{ left: 0 }}
              animate={{ left: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <LiaShippingFastSolid />
            </motion.div>
            <div className="mini-cart__progress-label">
                <p className="mini-cart__progress-label-text">Free shipping</p>
            </div>

            <motion.div
              className="mini-cart__progress-fill"
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
