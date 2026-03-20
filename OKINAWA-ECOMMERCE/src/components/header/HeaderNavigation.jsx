import { Link } from "react-router";
import "./HeaderNavigation.css";
import { NAV_CATEGORY_GROUPS } from "../../constants/platziCategories";

export function HeaderNavigation() {
  return (
    <div className="header-nav">
      <ul className="header-nav-list">
        <li>
          <Link to="/products">All products</Link>
        </li>
        {NAV_CATEGORY_GROUPS.map((group) => (
          <li
            key={group.slug}
            className="header-nav-list-item has-dropdown"
          >
            <Link to={`/products/category/${group.slug}`}>{group.label}</Link>
            <ul className="nav-dropdown">
              {group.subcategories.map((sub) => (
                <li key={sub.slug}>
                  <Link to={`/products/category/${sub.slug}`}>
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
