export function QuantitySection({ quantity, onQuantityChange }) {
    return (
        <>
         <div className="product-detail__qty-section">
                <p className="product-detail__qty-label">Quantity</p>
                <div className="product-detail__qty-controls">
                  <button
                    type="button"
                    className={
                      quantity > 1
                        ? "product-detail__qty-btn"
                        : "product-detail__qty-btn product-detail__qty-btn--disabled"
                    }
                    onClick={() => {
                      if (quantity > 1) onQuantityChange(quantity - 1);
                    }}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <p className="product-detail__qty-value">{quantity}</p>
                  <button
                    type="button"
                    className="product-detail__qty-btn"
                    onClick={() => onQuantityChange(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
        
        </>
    )
}
