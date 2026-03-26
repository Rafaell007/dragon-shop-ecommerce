import { BsCart } from "react-icons/bs";

import "./Checkout.css";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CartHeaderContent } from "./CartHeaderContent.jsx";
import { CartProductsList } from "./CartProductsList.jsx";
import { CartPaymentSummary } from "./CartPaymentSummary.jsx";
import { useCart } from "../../../context/CartContext";



export function CheckoutCartButton({ cartProducts }) {
  const { isCartOpen: isOpen, setIsCartOpen: setIsOpen } = useCart();
  
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  let totalQuantity = 0;
  

  cartProducts.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  

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
               <CartHeaderContent setIsOpen={setIsOpen} />
              <div className="cart-sidebar-content">
               
                <CartProductsList cartProducts={cartProducts} setIsOpen={setIsOpen} />
              </div>
              <CartPaymentSummary />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
