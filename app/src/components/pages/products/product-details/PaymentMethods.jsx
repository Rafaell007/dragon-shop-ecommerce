import PayPalLogo from "../../../../assets/images/checkout/PayPal.svg";
import ApplePayLogo from "../../../../assets/images/checkout/ApplePay.svg";
import { useCart } from "../../../../context/CartContext";

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
            <div className="product-detail__payments">
                <button
                  type="button"
                  className="product-detail__pay-btn product-detail__pay-btn--add-to-cart"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="product-detail__pay-btn product-detail__pay-btn--buy-now"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="product-detail__pay-btn product-detail__pay-btn--paypal"
                >
                  <img src={PayPalLogo} alt="PayPal" />
                </button>
                <button
                  type="button"
                  className="product-detail__pay-btn product-detail__pay-btn--apple-pay"
                >
                  <img src={ApplePayLogo} alt="Apple Pay" />
                </button>
              </div>
        
        </>
    )
}
