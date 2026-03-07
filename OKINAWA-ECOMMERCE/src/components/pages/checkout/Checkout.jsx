import { BsCart } from "react-icons/bs";
import "./Checkout.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";


export function CheckoutCartButton({cartProducts}) {


  

  const [isOpen, setIsOpen] = useState(false);


  useEffect(()=>{
    isOpen
    ? document.body.style.overflow = "hidden"
    : document.body.style.overflow="";
  }, [isOpen]);

    let totalQuantity = 0;

    cartProducts.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });



    return(
        <>
         <div className="cart-button-container">
         <button onClick={()=>setIsOpen(!isOpen)}>
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
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3}}
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
            initial={{ x: '100%'}}
            animate={{ x: '0%'}}
            exit={{ x: '100%'}}
            transition={{ duration: 0.3, ease: "easeInOut"}}
            className="cart-sidebar"
            onClick={(e)=> e.stopPropagation()}
            >
              <div className="cart-sidebar-close">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close mobile menu"
                >
                  X
                </button>
              </div>
              <div className="cart-sidebar-content">
                
              </div>
            </motion.aside>
            
          </motion.div>
        )}
        </AnimatePresence>

         
        </>
    )
}