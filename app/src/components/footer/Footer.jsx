import "./Footer.css";
import freeShippingDragon from "../../assets/images/footer/free-shipping-dragon.webp";
import customerSupportDragon from "../../assets/images/footer/customer-support-dragon.webp";
import secureDragon from "../../assets/images/footer/secure-dragon.webp";
import returnsDragon from "../../assets/images/footer/returns-dragon.webp";
import footerBackgroundImage from "../../assets/images/footer/background-dragon.webp";
import { Link } from "react-router";
import { BsEnvelope} from "react-icons/bs";
export function Footer() {
    return (
        <>
          <footer className="footer">
      <div className="site-footer__content">
        <div className="site-footer__perks">
          <div className="footer-perk">
            <img
              className="footer-perk__icon"
              src={freeShippingDragon}
              alt="Free shipping on orders over $200"
            />
            <p className="footer-perk__title">Free Shipping</p>
            <p className="footer-perk__description">
              Free shipping on orders over $200
            </p>
          </div>
          <div className="footer-perk">
            <img
              className="footer-perk__icon"
              src={customerSupportDragon}
              alt="24/7 customer support"
            />
            <p className="footer-perk__title">Customer Support</p>
            <p className="footer-perk__description">24/7 customer support</p>
          </div>
          <div className="footer-perk">
            <img
              className="footer-perk__icon"
              src={secureDragon}
              alt="Secure payment"
            />
            <p className="footer-perk__title">Secure Payment</p>
            <p className="footer-perk__description">100% secure payment</p>
          </div>
          <div className="footer-perk">
            <img
              className="footer-perk__icon"
              src={returnsDragon}
              alt="Easy returns"
            />
            <p className="footer-perk__title">Easy Returns</p>
            <p className="footer-perk__description">30-day return policy</p>
          </div>
        </div>
        <div className="site-footer__nav">
          <div className="site-footer__columns">
            <div className="site-footer__column">
                <p className="site-footer__column-title">what's dragon-shop?</p>
                <p className="site-footer__column-description">Dragon-shop is a online store that sells all kind of eccomerce products.</p>
            </div>
            <div className="site-footer__column">
                <p className="site-footer__column-title">about us</p>
                <ul>
                    <li><Link to="">About dragon-shop</Link></li>
                    <li><Link to="">Contact us</Link></li>
                    <li><Link to="">Privacy policy</Link></li>
                    <li><Link to="">Terms of service</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Affiliate program</Link></li>
                    <li><Link to="">Careers</Link></li>
                    <li><Link to="">Press</Link></li>
                    <li><Link to="">Investors</Link></li>
                </ul>
            </div>
            <div className="site-footer__column">
                <p className="site-footer__column-title">Help</p>
                <ul>
                    <li><Link to="">Contact Us</Link></li>
                    <li><Link to="">FAQ</Link></li>
                    <li><Link to="">Shipping</Link></li>
                    <li><Link to="">Refunds & Returns</Link></li>
                    <li><Link to="">Size Chart</Link></li>
                    <li><Link to="">Track My Order</Link></li>
                </ul>
            </div>
            <div className="site-footer__column">
                <p className="site-footer__column-title">Explore</p>
                <ul>
                    <li><Link to="/products/category/smartphones">New In</Link></li>
                    <li><Link to="/products/category/groceries">Flash Sale</Link></li>
                    <li><Link to="/products/category/electronics">Best Seller</Link></li>
                    <li><Link to="/products/category/women">Women</Link></li>
                    <li><Link to="/products/category/men">Men</Link></li>
                    <li><Link to="/products/category/tops">Kids</Link></li>
                    <li><Link to="/products/category/mens-shirts">T-Shirts</Link></li>
                    <li><Link to="/products/category/men">Clothing</Link></li>
                    <li><Link to="/products/category/mobile-accessories">Accessory</Link></li>
                    <li><Link to="/products/category/home-decoration">Home & Living</Link></li>
                </ul>
            </div>
            <div className="site-footer__column">
                <p className="site-footer__column-title">Subscribe to our emails</p>
                <p className="site-footer__column-description">Instantly receive updates, access to exclusive deals, and more.</p>
                <div className="site-footer__input-wrapper">
                    <input type="email" placeholder="Enter your email" className="site-footer__column-input" />
                    <button className="site-footer__input-button"><BsEnvelope /></button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="footer_background_image">
                <img src={footerBackgroundImage} alt="Footer background image" />
            </div>
    </footer>
        
        </>
    )
}