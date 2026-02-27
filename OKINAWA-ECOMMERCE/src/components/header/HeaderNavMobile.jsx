import { AnimatePresence, motion} from "motion/react"
import { useState, useEffect} from "react";
import { BsList } from "react-icons/bs";
import "./HeaderNavMobile.css";
import { BsHeart } from "react-icons/bs";
import {MobileDropdownItem} from "./MobileDropdownItem.jsx";

export function HeaderNavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    isOpen
    ? document.body.style.overflow = "hidden"
     : document.body.style.overflow = "";
    
   }, [isOpen]);

  return (
   


    <>
      <div className="header-nav-mobile">
        <button
          className="header-nav-mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open mobile menu"
        >
          <BsList />
        </button>

        <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-sidebar-overlay"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3}}
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
            initial={{ x: '-100%'}}
            animate={{ x: '0%'}}
            exit={{ x: '-100%'}}
            transition={{ duration: 0.3, ease: "easeInOut"}}
            className="mobile-sidebar"
            onClick={(e)=> e.stopPropagation()}
            >
              <div className="mobile-sidebar-close">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close mobile menu"
                >
                  X
                </button>
              </div>
              <div className="mobile-sidebar-content">
                <ul className="mobile-sidebar-list">
                  <li>
                    <a href="">New in</a>
                  </li>
                  <li>
                    <a href="">Flash sale</a>
                  </li>
                  <li>
                    <a href="">Best sellers</a>
                  </li>
                  
                  <MobileDropdownItem label = "Men">
                    <li><a href="">T-shirts</a></li>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Jeans</a></li>
                    <li><a href="">Jackets</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Watches</a></li>
                    <li><a href="">Bags</a></li>
                  </MobileDropdownItem>
                  <MobileDropdownItem label = "Women">
                    <li><a href="">T-shirts</a></li>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Jeans</a></li>
                    <li><a href="">Jackets</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Watches</a></li>
                    <li><a href="">Bags</a></li>
                  </MobileDropdownItem>
                  <MobileDropdownItem label = "Kids">
                    <li><a href="">T-shirts</a></li>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Jeans</a></li>
                    <li><a href="">Jackets</a></li>
                    <li><a href="">Shoes</a></li>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Watches</a></li>
                    <li><a href="">Bags</a></li>
                  </MobileDropdownItem>
                  <MobileDropdownItem label = "T-shirts">
                    <li><a href="">men</a></li>
                    <li><a href="">women</a></li>
                  </MobileDropdownItem>
                  <li>
                    <a href="">shirts</a>{" "}
                  </li>
                  <li>
                    <a href="">clothing</a>
                  </li>
                  <li>
                    <a href="">accessory</a>
                  </li>
                </ul>
              </div>
              <div className="mobile-sidebar-wishlist">
                  <a href="">
                    <BsHeart />
                  </a>
                  <a href="">wishlist</a>
                </div>
            </motion.aside>
            
          </motion.div>
        )}
        </AnimatePresence>

      </div>
    </>
  );
}
