import PayPalLogo from "../../../assets/images/checkout/PayPal.svg";
import ApplePayLogo from "../../../assets/images/checkout/ApplePay.svg";
import { useCart } from "../../../context/CartContext";

export function PaymentMethods({product, quantity}) {
  const { addToCart, setIsCartOpen } = useCart();

    function handleAddToCart() {
      addToCart({
        id: product.id,
        name: product.title,
        image: product.images?.[0] ?? product.thumbnail,
        priceCents: Math.round(Number(product.price) * 100),
        quantity: quantity,
      });
      setIsCartOpen(true);
    }

    return(
        <>
            <div className="product-details__payment-methods">
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--add-to-cart"
                  onClick={handleAddToCart}
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