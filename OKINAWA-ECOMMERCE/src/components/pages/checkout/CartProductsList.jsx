import "./CartProductsList.css";
import { ProductQuantityChanger } from "./ProductQuantityChanger";



export function CartProductsList({ cartProducts, setIsOpen}) {



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
                <ProductQuantityChanger cartProduct={cartProduct} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
