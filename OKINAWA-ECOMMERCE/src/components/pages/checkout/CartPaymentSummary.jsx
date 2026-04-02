import { useState } from "react";
import "./CartPaymentSummary.css";
import { useCart } from "../../../context/CartContext.jsx";
import PayPalLogo from "../../../assets/images/checkout/PayPal.svg";
import ApplePayLogo from "../../../assets/images/checkout/ApplePay.svg";


const WORRY_FREE_COST = 0.98;

export function CartPaymentSummary( ) {
    const [worryFree, setWorryFree] = useState(false);
   
    const {totalPrice} = useCart();
    const finalPrice = worryFree ?  totalPrice + WORRY_FREE_COST : totalPrice;
  

    return (
        <>
        <div className="mini-cart__summary">
            <div className="mini-cart__total-row">
                <h4 className="mini-cart__total-heading">Total</h4>
                <p className="mini-cart__total-value">{finalPrice.toFixed(2)} USD</p>
            </div>
            <div className="mini-cart__addon">
                <label className="mini-cart__addon-label">
                    <input
                     type="checkbox"
                     checked={worryFree}
                     onChange={() => setWorryFree(!worryFree)}
                     className="mini-cart__addon-checkbox"
                     />
                    <span className="mini-cart__addon-copy"><b>Worry-free delivery</b> for $0.98 USD</span>
                </label>
                <p className="mini-cart__addon-note">Get a full refund if the order doesn't arrive as described, including loss & damage in transit</p>
            </div>
            <div className="mini-cart__payments">
            <button type="button" className="mini-cart__pay-btn mini-cart__pay-btn--paypal"><img src={PayPalLogo} alt="PayPal" /></button>
            <button type="button" className="mini-cart__pay-btn mini-cart__pay-btn--apple-pay"><img src={ApplePayLogo} alt="Apple Pay" /></button>
            <button type="button" className="mini-cart__pay-btn mini-cart__pay-btn--checkout">Checkout</button>
            </div>
        </div>
        </>
    )
}
