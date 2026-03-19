import { Link } from "react-router";
import "./HeaderNavigation.css";


export function HeaderNavigation() {
    return (
        <>
              <div className="header-nav" >
                    <ul className="header-nav-list">
                        <li>
                            <Link to="/products/new-in">new in</Link>
                        </li>
                        <li>
                            <Link to="/products/flash-sale">flash sale</Link>
                        </li>
                        <li>
                            <Link to="/products/best-sellers">best sellers</Link>
                        </li>
                        <li className="header-nav-list-item has-dropdown">
                            <Link to="/products/men">men</Link>
                            <ul className="nav-dropdown">
                                <li><Link to="/products?tags=t-shirt,men">T-shirts</Link></li>
                                <li><Link to="/products?tags=shirt,men">Shirts</Link></li>
                                <li><Link to="/products?tags=jeans,men">Jeans</Link></li>
                                <li><Link to="/products?tags=jacket,men">Jackets</Link></li>
                                <li><Link to="/products?tags=shoes,men">Shoes</Link></li>
                                <li><Link to="/products?tags=accessory,men">Accessories</Link></li>
                                <li><Link to="/products?tags=watches,men">Watches</Link></li>
                                <li><Link to="/products?tags=bags,men">Bags</Link></li>
                                <li><Link to="/products?tags=jewelry,men">Jewelry</Link></li>
                            </ul>
                        </li>
                        <li className="header-nav-list-item has-dropdown">
                            <Link to="/products/women">women</Link>
                            <ul className="nav-dropdown">
                                <li><Link to="/products?tags=t-shirt,women">T-shirts</Link></li>
                                <li><Link to="/products?tags=shirt,women">Shirts</Link></li>
                                <li><Link to="/products?tags=jeans,women">Jeans</Link></li>
                                <li><Link to="/products?tags=jacket,women">Jackets</Link></li>
                                <li><Link to="/products?tags=shoes,women">Shoes</Link></li>
                                <li><Link to="/products?tags=accessory,women">Accessories</Link></li>
                                <li><Link to="/products?tags=watches,women">Watches</Link></li>
                                <li><Link to="/products?tags=bags,women">Bags</Link></li>
                                <li><Link to="/products?tags=jewelry,women">Jewelry</Link></li>
                            </ul>
                        </li>
                        <li className="header-nav-list-item has-dropdown">
                            <Link to="/products/kids">kids</Link>
                            <ul className="nav-dropdown">
                                <li><Link to="/products?tags=t-shirt,kids">T-shirts</Link></li>
                                <li><Link to="/products?tags=shirt,kids">Shirts</Link></li>
                                <li><Link to="/products?tags=jeans,kids">Jeans</Link></li>
                                <li><Link to="/products?tags=jacket,kids">Jackets</Link></li>
                                <li><Link to="/products?tags=shoes,kids">Shoes</Link></li>
                                <li><Link to="/products?tags=accessory,kids">Accessories</Link></li>
                                <li><Link to="/products?tags=watches,kids">Watches</Link></li>
                                <li><Link to="/products?tags=bags,kids">Bags</Link></li>
                                <li><Link to="/products?tags=jewelry,kids">Jewelry</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/products?tags=t-shirt">t-shirts</Link>
                        </li>
                        <li>
                            <Link to="/products?tags=shirt">shirt</Link>
                        </li>
                        <li>
                            <Link to="/products?tags=clothing">clothing</Link>
                        </li>
                        <li>
                            <Link to="/products?tags=accessory">accessory</Link>
                        </li>
                    </ul>
                </div>
        </>
    )
}