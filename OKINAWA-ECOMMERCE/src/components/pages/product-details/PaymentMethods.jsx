import PayPalLogo from "../../../assets/images/checkout/PayPal.svg";
import ApplePayLogo from "../../../assets/images/checkout/ApplePay.svg";


export function PaymentMethods() {
    return(
        <>
            <div className="product-details__payment-methods">
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--add-to-cart"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--buy-now"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--paypal"
                >
                  <img src={PayPalLogo} alt="PayPal" />
                </button>
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--apple-pay"
                >
                  <img src={ApplePayLogo} alt="Apple Pay" />
                </button>
              </div>
        
        </>
    )
}