import { BsChevronDown, BsDash } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router";
import "./MobileDropdownItem.css";
import { motion, AnimatePresence } from "motion/react";

export function MobileDropdownItem({ label, to, onNavigate, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="dropdown-item">
      <div className="dropdown-item-content">
        <Link to={to} onClick={onNavigate}>
          {label}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-button"
          aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
        >
          {isOpen ? <BsDash /> : <BsChevronDown />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="dropdown-submenu-wrapper"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <ul className="dropdown-submenu">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
