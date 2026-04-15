import "./CartProductsList.css";
import { ProductQuantityChanger } from "./ProductQuantityChanger";



export function CartProductsList({ cartProducts, setIsOpen}) {



  return (
    <>
    {cartProducts.length === 0 
    && (
    <div className="mini-cart__empty">
      <p className="mini-cart__empty-text">Your cart is empty.</p>
      <button type="button" className="mini-cart__continue-btn" onClick={() => setIsOpen(false)}>Continue Shopping</button>
    </div>  
    
  )}

      <div className="mini-cart__lines">
        {cartProducts.map((cartProduct) => {
          return (
            <div className="mini-cart__line" key={cartProduct.id}>
              <div className="mini-cart__line-image">
                <img src={cartProduct.image} alt={cartProduct.name} />
              </div>
              <div className="mini-cart__line-body">
                <p className="mini-cart__line-name">{cartProduct.name}</p>
                <p className="mini-cart__line-brand">
                  <b>Brand:</b> {cartProduct.brand}
                </p>
                <p className="mini-cart__line-category">
                  <b>Category:</b> {cartProduct.category}
                </p>
                <p className="mini-cart__line-price">
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
