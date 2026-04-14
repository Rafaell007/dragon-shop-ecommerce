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
    <footer className="site-footer">
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
                    <li><Link to="/about">About dragon-shop</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/privacy">Privacy policy</Link></li>
                    <li><Link to="/terms">Terms of service</Link></li>
                    <li><Link to="/refund">Blog</Link></li>
                    <li><Link to="/affiliate-program">Affiliate program</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/press">Press</Link></li>
                    <li><Link to="/investors">Investors</Link></li>
                </ul>
            </div>
            <div className="site-footer__column">
                <p className="site-footer__column-title">Help</p>
                <ul>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/shipping">Shipping</Link></li>
                    <li><Link to="/refunds-returns">Refunds & Returns</Link></li>
                    <li><Link to="/size-chart">Size Chart</Link></li>
                    <li><Link to="/track-order">Track My Order</Link></li>
                </ul>
            </div>
            <div className="site-footer__column">
                <p className="site-footer__column-title">Explore</p>
                <ul>
                    <li><Link to="/new-in">New In</Link></li>
                    <li><Link to="/flash-sale">Flash Sale</Link></li>
                    <li><Link to="/best-seller">Best Seller</Link></li>
                    <li><Link to="/women">Women</Link></li>
                    <li><Link to="/men">Men</Link></li>
                    <li><Link to="/kids">Kids</Link></li>
                    <li><Link to="/t-shirts">T-Shirts</Link></li>
                    <li><Link to="/clothing">Clothing</Link></li>
                    <li><Link to="/accessory">Accessory</Link></li>
                    <li><Link to="/home-living">Home & Living</Link></li>
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
  );
}
