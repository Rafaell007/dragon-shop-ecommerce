import "./ProductQuantityChanger.css";
import { useCart } from "../../../context/CartContext";
import { BsTrash } from "react-icons/bs";

export function ProductQuantityChanger({ cartProduct }) {
    const { removeFromCart, addToCart, deleteFromCart } = useCart();


    return (
        <>
          <div className="mini-cart__qty">
                  <div className="mini-cart__qty-controls">
                    <button
                      type="button"
                      className={ cartProduct.quantity > 1 ? "mini-cart__qty-btn" : "mini-cart__qty-btn mini-cart__qty-btn--disabled"}
                      onClick=  {cartProduct.quantity > 1 && (
                        () => removeFromCart(cartProduct)
                      ) }
                    >
                      -
                    </button>
                    <p className="mini-cart__qty-value">{cartProduct.quantity}</p>
                    <button
                      type="button"
                      className="mini-cart__qty-btn"
                      onClick={() => addToCart({...cartProduct, quantity: 1})}
                    >
                      +
                    </button>
                  </div>
                  <button type="button" className="mini-cart__qty-remove" onClick={() => deleteFromCart(cartProduct)}>
                    <BsTrash />
                  </button>
                </div>
        </>
    )
}
