export function QuantitySection({ quantity, onQuantityChange }) {
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
                      if (quantity > 1) onQuantityChange(quantity - 1);
                    }}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <p className="product-details__quantity-value">{quantity}</p>
                  <button
                    type="button"
                    className="product-details__quantity-button"
                    onClick={() => onQuantityChange(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
        
        </>
    )
}