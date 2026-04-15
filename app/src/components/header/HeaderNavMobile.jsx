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
      <div className="sidebar-nav">
        <button
          className="sidebar-nav__menu-button"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open mobile menu"
        >
          <BsList />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sidebar-nav__overlay"
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
                className="sidebar-nav__panel"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sidebar-nav__close">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close mobile menu"
                  >
                    X
                  </button>
                </div>
                <div className="sidebar-nav__content">
                  <ul className="sidebar-nav__list">
                    <li className="sidebar-nav__item">
                      <Link className="sidebar-nav__link" to="/products" onClick={() => setIsOpen(false)}>
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
                          <li className="sidebar-nav-dropdown__sub-item" key={sub.slug}>
                            <Link
                              className="sidebar-nav-dropdown__sub-link"
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
                <div className="sidebar-nav__wishlist">
                  <Link className="sidebar-nav__wishlist-link" to="" onClick={() => setIsOpen(false)}>
                    <BsHeart />
                  </Link>
                  <Link className="sidebar-nav__wishlist-link" to="/wishlist" onClick={() => setIsOpen(false)}>
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

