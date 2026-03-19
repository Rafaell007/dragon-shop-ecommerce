import { AnimatePresence, motion} from "motion/react"
import { useState, useEffect} from "react";
import { Link } from "react-router";
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
                    <Link to="/products/new-in" onClick={() => setIsOpen(false)}>New in</Link>
                  </li>
                  <li>
                    <Link to="/products/flash-sale" onClick={() => setIsOpen(false)}>Flash sale</Link>
                  </li>
                  <li>
                    <Link to="/products/best-sellers" onClick={() => setIsOpen(false)}>Best sellers</Link>
                  </li>
                  
                  <MobileDropdownItem label="Men">
                    <li><Link to="/products?tags=t-shirt,men" onClick={() => setIsOpen(false)}>T-shirts</Link></li>
                    <li><Link to="/products?tags=shirt,men" onClick={() => setIsOpen(false)}>Shirts</Link></li>
                    <li><Link to="/products?tags=jeans,men" onClick={() => setIsOpen(false)}>Jeans</Link></li>
                    <li><Link to="/products?tags=jacket,men" onClick={() => setIsOpen(false)}>Jackets</Link></li>
                    <li><Link to="/products?tags=shoes,men" onClick={() => setIsOpen(false)}>Shoes</Link></li>
                    <li><Link to="/products?tags=accessory,men" onClick={() => setIsOpen(false)}>Accessories</Link></li>
                    <li><Link to="/products?tags=watches,men" onClick={() => setIsOpen(false)}>Watches</Link></li>
                    <li><Link to="/products?tags=bags,men" onClick={() => setIsOpen(false)}>Bags</Link></li>
                  </MobileDropdownItem>
                  <MobileDropdownItem label="Women">
                    <li><Link to="/products?tags=t-shirt,women" onClick={() => setIsOpen(false)}>T-shirts</Link></li>
                    <li><Link to="/products?tags=shirt,women" onClick={() => setIsOpen(false)}>Shirts</Link></li>
                    <li><Link to="/products?tags=jeans,women" onClick={() => setIsOpen(false)}>Jeans</Link></li>
                    <li><Link to="/products?tags=jacket,women" onClick={() => setIsOpen(false)}>Jackets</Link></li>
                    <li><Link to="/products?tags=shoes,women" onClick={() => setIsOpen(false)}>Shoes</Link></li>
                    <li><Link to="/products?tags=accessory,women" onClick={() => setIsOpen(false)}>Accessories</Link></li>
                    <li><Link to="/products?tags=watches,women" onClick={() => setIsOpen(false)}>Watches</Link></li>
                    <li><Link to="/products?tags=bags,women" onClick={() => setIsOpen(false)}>Bags</Link></li>
                  </MobileDropdownItem>
                  <MobileDropdownItem label="Kids">
                    <li><Link to="/products?tags=t-shirt,kids" onClick={() => setIsOpen(false)}>T-shirts</Link></li>
                    <li><Link to="/products?tags=shirt,kids" onClick={() => setIsOpen(false)}>Shirts</Link></li>
                    <li><Link to="/products?tags=jeans,kids" onClick={() => setIsOpen(false)}>Jeans</Link></li>
                    <li><Link to="/products?tags=jacket,kids" onClick={() => setIsOpen(false)}>Jackets</Link></li>
                    <li><Link to="/products?tags=shoes,kids" onClick={() => setIsOpen(false)}>Shoes</Link></li>
                    <li><Link to="/products?tags=accessory,kids" onClick={() => setIsOpen(false)}>Accessories</Link></li>
                    <li><Link to="/products?tags=watches,kids" onClick={() => setIsOpen(false)}>Watches</Link></li>
                    <li><Link to="/products?tags=bags,kids" onClick={() => setIsOpen(false)}>Bags</Link></li>
                  </MobileDropdownItem>
                  <MobileDropdownItem label="T-shirts">
                    <li><Link to="/products?tags=t-shirt,men" onClick={() => setIsOpen(false)}>men</Link></li>
                    <li><Link to="/products?tags=t-shirt,women" onClick={() => setIsOpen(false)}>women</Link></li>
                  </MobileDropdownItem>
                  <li>
                    <Link to="/products?tags=shirt" onClick={() => setIsOpen(false)}>shirts</Link>
                  </li>
                  <li>
                    <Link to="/products?tags=clothing" onClick={() => setIsOpen(false)}>clothing</Link>
                  </li>
                  <li>
                    <Link to="/products?tags=accessory" onClick={() => setIsOpen(false)}>accessory</Link>
                  </li>
                </ul>
              </div>
              <div className="mobile-sidebar-wishlist">
                  <Link to="/wishlist" onClick={() => setIsOpen(false)}>
                    <BsHeart />
                  </Link>
                  <Link to="/wishlist" onClick={() => setIsOpen(false)}>wishlist</Link>
                </div>
            </motion.aside>
            
          </motion.div>
        )}
        </AnimatePresence>

      </div>
    </>
  );
}
