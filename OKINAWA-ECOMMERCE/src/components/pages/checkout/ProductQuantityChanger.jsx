import "./ProductQuantityChanger.css";
import { useCart } from "../../../context/CartContext";
import { BsTrash } from "react-icons/bs";

export function ProductQuantityChanger({ cartProduct }) {
    const { removeFromCart, addToCart, deleteFromCart } = useCart();


    return (
        <>
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
        </>
    )
}