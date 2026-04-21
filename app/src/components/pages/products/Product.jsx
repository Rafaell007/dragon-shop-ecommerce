import "./Product.css";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router";

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
    <div className="product-card">
      <div className="product-card__media">
        <Link className="product-card__image-link" to={`/product/${product.id}`}>
        <img className="product-card__image" src={imageSrc} alt={title} />
        </Link>
        <button
          type="button"
          onClick={handleClick}
          className={`product-card__cart-btn${added ? " product-card__cart-btn--added" : ""}`}
          aria-label="Add to cart"
        >
          {added ? <BsCartCheckFill /> : <BsCartPlus />}
        </button>
      </div>
      <div className="product-card__title-wrap">
        <p className="product-card__title">{title}</p>
      </div>
      <div className="product-card__price-wrap">
        <p className="product-card__price">{priceLabel}</p>
      </div>
    </div>
  );
}
