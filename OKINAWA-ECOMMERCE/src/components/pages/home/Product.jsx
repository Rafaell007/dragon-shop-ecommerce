import "./Product.css";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";

export function Product({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <>
      <div key={product.id} className="product-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-name-container">
          <p>{product.name}</p>
        </div>
        <div className="product-price-container">
          <p>{(product.priceCents / 100).toFixed(2)} $ USD</p>
        </div>
        <button
          onClick={handleClick}
          className={`add-to-cart-button ${added ? "added" : ""}`}
        >
          {added ? <BsCartCheckFill /> : <BsCartPlus />}
        </button>
      </div>
    </>
  );
}
