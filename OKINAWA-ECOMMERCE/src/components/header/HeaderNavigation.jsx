import "./HeaderNavigation.css";

export function HeaderNavigation() {
    return (
        <>
              <div className="header-nav" >
                    <ul className="header-nav-list">
                        <li>
                            <a href="">new in</a>
                        </li>
                        <li>
                            <a href="">flash sale</a>
                        </li>
                        <li>
                            <a href="">best sellers</a>
                        </li>
                        <li>
                            <a href="">men</a>
                            <ul className="header-nav-list-sublist">
                                <li><a href="">T-shirts</a></li>
                                <li><a href="">Shirts</a></li>
                                <li><a href="">Jeans</a></li>
                                <li><a href="">Jackets</a></li>
                                <li><a href="">Shoes</a></li>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Watches</a></li>
                                <li><a href="">Bags</a></li>
                                <li><a href="">Jewelry</a></li>
                                <li><a href="">Shoes</a></li>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Watches</a></li>
                                <li><a href="">Bags</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">women</a>

                        </li>
                        <li>
                            <a href="">kids</a>
                        </li>
                        <li>
                            <a href="">t-shirts</a>
                        </li>
                        <li>
                            <a href="">shirt</a>
                        </li>
                        <li>
                            <a href="">clothing</a>
                        </li>
                        <li>
                            <a href="">accessory</a>
                        </li>
                    </ul>
                </div>
        </>
    )
}