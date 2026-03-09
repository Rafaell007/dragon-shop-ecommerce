import "./CartProductsList.css";


export function CartProductsList({ cartProducts }) {
  return (
    <>
      <div className="cart-products-list-container">
        {cartProducts.map((cartProduct) => {
          return (
            <div className="cart-product">
              <div className="cart-product-image">
                <img src={cartProduct.image} alt={cartProduct.name} />
              </div>
              <div className="cart-product-details">
                <p className="product-name">{cartProduct.name}</p>
                <p className="product-color">Color: {cartProduct.color}</p>
                <p className="product-size">Size: {cartProduct.size}</p>
                <p className="product-price">${cartProduct.priceCents / 100}</p>
                <p className="product-quantity">Quantity: {cartProduct.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
