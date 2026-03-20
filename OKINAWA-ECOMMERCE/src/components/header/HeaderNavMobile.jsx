import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { BsList } from "react-icons/bs";
import "./HeaderNavMobile.css";
import { BsHeart } from "react-icons/bs";
import { NAV_CATEGORY_GROUPS } from "../../constants/platziCategories";
import { MobileDropdownItem } from "./MobileDropdownItem.jsx";

export function HeaderNavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mobile-sidebar"
                onClick={(e) => e.stopPropagation()}
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
                      <Link to="/products" onClick={() => setIsOpen(false)}>
                        All products
                      </Link>
                    </li>
                    {NAV_CATEGORY_GROUPS.map((group) => (
                      <MobileDropdownItem
                        key={group.slug}
                        label={group.label}
                        to={`/products/category/${group.slug}`}
                        onNavigate={() => setIsOpen(false)}
                      >
                        {group.subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              to={`/products/category/${sub.slug}`}
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </MobileDropdownItem>
                    ))}
                  </ul>
                </div>
                <div className="mobile-sidebar-wishlist">
                  <Link to="/wishlist" onClick={() => setIsOpen(false)}>
                    <BsHeart />
                  </Link>
                  <Link to="/wishlist" onClick={() => setIsOpen(false)}>
                    wishlist
                  </Link>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
