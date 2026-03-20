import "./Product.css";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";

export function Product({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const imageSrc = product.images?.[0] ?? product.thumbnail;
  const title = product.title;
  const priceLabel = `${product.price} $ USD`;

  const handleClick = () => {
    addToCart({
      id: product.id,
      name: product.title,
      image: product.images?.[0] ?? product.thumbnail,
      priceCents: Math.round(Number(product.price) * 100),
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img src={imageSrc} alt="" />
        <button
          type="button"
          onClick={handleClick}
          className={`add-to-cart-button ${added ? "added" : ""}`}
          aria-label="Add to cart"
        >
          {added ? <BsCartCheckFill /> : <BsCartPlus />}
        </button>
      </div>
      <div className="product-name-container">
        <p>{title}</p>
      </div>
      <div className="product-price-container">
        <p>{priceLabel}</p>
      </div>
    </div>
  );
}
