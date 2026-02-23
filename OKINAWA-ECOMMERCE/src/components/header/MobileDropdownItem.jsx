import { BsChevronDown, BsDash } from "react-icons/bs";
import { useState } from "react";
import "./MobileDropdownItem.css";

export function MobileDropdownItem({label, children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="dropdown-item">
        <div className="dropdown-item-content">
      <a href="">{label}</a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-button"
        aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
      >
        {isOpen ? <BsDash /> : <BsChevronDown />}
      </button>
      </div>
      {isOpen && <ul className="dropdown-submenu">{children}</ul>}
    </li>
  );
}
