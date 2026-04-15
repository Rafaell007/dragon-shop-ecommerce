import { Link } from "react-router";
import "./HeaderNavigation.css";
import { NAV_CATEGORY_GROUPS } from "../../constants/platziCategories";

export function HeaderNavigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="main-nav__link" to="/products">All products</Link>
        </li>
        {NAV_CATEGORY_GROUPS.map((group) => (
          <li
            key={group.slug}
            className="main-nav__item main-nav__item--has-dropdown"
          >
            <Link className="main-nav__link" to={`/products/category/${group.slug}`}>{group.label}</Link>
            <ul className="main-nav__dropdown">
              {group.subcategories.map((sub) => (
                <li className="main-nav__dropdown-item" key={sub.slug}>
                  <Link className="main-nav__link main-nav__link--sub" to={`/products/category/${sub.slug}`}>
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
