import { useState } from "react";


export function QuantitySection() {

    const [quantity, setQuantity] = useState(1);
    return (
        <>
         <div className="product-details__quantity-section">
                <p className="product-details__quantity-label">Quantity</p>
                <div className="product-details__quantity-buttons">
                  <button
                    type="button"
                    className={
                      quantity > 1
                        ? "product-details__quantity-button"
                        : "product-details__quantity-button product-details__quantity-button--disabled"
                    }
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <p className="product-details__quantity-value">{quantity}</p>
                  <button
                    type="button"
                    className="product-details__quantity-button"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
        
        </>
    )
}