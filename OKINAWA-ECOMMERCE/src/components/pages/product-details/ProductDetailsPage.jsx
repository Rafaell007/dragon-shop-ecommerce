import "./ProductDetailsPage.css";
import { Header } from "../../header/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

export function ProductDetailsPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      setError(null);
      setProduct(null);
      return;
    }

    let cancelled = false;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        if (!cancelled) setProduct(data);
      } catch {
        if (!cancelled) {
          setError(" can't load product ");
          setProduct(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [productId]);

  return (
    <>
      <Header />
      {loading && <p>Loading...</p>}
      {!loading && error && <p role="alert">{error}</p>}
      {!loading && !error && product && (
        <div className="page-wrapper">
          <div className="description-container">
            <div className="product-details__summary-image">
              <img
                className="product-details__image"
                src={product.images[0] ?? product.thumbnail}
                alt=""
              />
            </div>
            <div className="product-details-container">
              <div className="product-name-container"></div>
              <div className="product-price-container"></div>
              <div className="product-quantity-container"></div>
              <div className="add-to-cart-button"></div>
              <div className="payment-methods-container"></div>
            </div>
          </div>
          <div className="also-like-container"></div>
        </div>
      )}
    </>
  );
}
