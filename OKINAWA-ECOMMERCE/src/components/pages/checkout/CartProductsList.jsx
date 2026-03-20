import "./CartProductsList.css";
import { BsTrash } from "react-icons/bs";
import { useCart } from "../../../context/CartContext";


export function CartProductsList({ cartProducts, setIsOpen}) {
  const { addToCart, removeFromCart, deleteFromCart } = useCart();




  return (
    <>
    {cartProducts.length === 0 
    && (
    <div className="empty-cart">
      <p>Your cart is empty.</p>
      <button className="continue-shopping-button" onClick={() => setIsOpen(false)}>Continue Shopping</button>
    </div>  
    
  )}

      <div className="cart-products-list-container">
        {cartProducts.map((cartProduct) => {
          return (
            <div className="cart-product">
              <div className="cart-product-image">
                <img src={cartProduct.image} alt={cartProduct.name} />
              </div>
              <div className="cart-product-details">
                <p className="product-name">{cartProduct.name}</p>
                <p className="product-color">
                  <b>Brand:</b> {cartProduct.brand}
                </p>
                <p className="product-size">
                  <b>Category:</b> {cartProduct.category}
                </p>
                <p className="product-price">
                  {cartProduct.priceCents / 100} USD
                </p>
                <div className="product-quantity-container">
                  <div className="product-quantity-buttons">
                    <button
                      className= { cartProduct.quantity > 1 ? "product-quantity-button" : "product-quantity-button-disabled"}
                      onClick=  {cartProduct.quantity > 1 && (
                        () => removeFromCart(cartProduct)
                      ) }
                    >
                      -
                    </button>
                    <p className="product-quantity">{cartProduct.quantity}</p>
                    <button
                      className="product-quantity-button"
                      onClick={() => addToCart(cartProduct)}
                    >
                      +
                    </button>
                  </div>
                  <button className="product-delete-button" onClick={() => deleteFromCart(cartProduct)}>
                    <BsTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
