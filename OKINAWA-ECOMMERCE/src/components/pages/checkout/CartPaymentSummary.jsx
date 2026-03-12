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
        <div className="cart-payment-summary-container">
            <div className="total-price-container">
                <h4>Total</h4>
                <p>{finalPrice.toFixed(2)} USD</p>
            </div>
            <div className="worry-free-delivery-container">
                <label>
                    <input
                     type="checkbox"
                     checked={worryFree}
                     onChange={() => setWorryFree(!worryFree)}
                     />
                    <span><b>Worry-free delivery</b> for $0.98 USD</span>
                </label>
                <p>Get a full refund if the order doesn't arrive as described, including loss & damage in transit</p>
            </div>
            <div className="payment-methods-container">
            <button className="paypal-button"><img src={PayPalLogo} alt="PayPal" /></button>
            <button className="apple-pay-button"><img src={ApplePayLogo} alt="Apple Pay" /></button>
            <button className="checkout-button">Checkout</button>
            </div>
        </div>
        </>
    )
}