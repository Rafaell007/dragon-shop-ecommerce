import { BsCart } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import "./Checkout.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const FREE_SHIPPING_THRESHOLD = 200;

export function CheckoutCartButton({ cartProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(cartProducts);
  

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  let totalQuantity = 0;
  let totalPrice = 0;

  cartProducts.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
    totalPrice += (cartItem.priceCents / 100) * cartItem.quantity;
  });
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - totalPrice, 0);
  const progress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const isFreeShipping = remaining === 0;

  return (
    <>
      <div className="cart-button-container">
        <button onClick={() => setIsOpen(!isOpen)}>
          <BsCart />
        </button>
        <div className="cart-count">
          <span>{totalQuantity}</span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cart-sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="cart-sidebar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cart-sidebar-content">
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
                        : `Make purchase of ${remaining.toFixed(2)}$ more to unlock free shipping`}
                    </p>
                    <div className="free-shipping-bar-wrapper">
                      <motion.div
                        className="free-shipping-icon"
                        initial={{ left: 0 }}
                        animate={{ left: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <LiaShippingFastSolid />
                      </motion.div>

                      <motion.div className="free-shipping-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
