import "./ProductDetailsPage.css";
import { Header } from "../../header/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import freeShippingBanner from "../../../assets/images/product-details/free-shipping.webp";
import PayPalLogo from "../../../assets/images/checkout/PayPal.svg";
import ApplePayLogo from "../../../assets/images/checkout/ApplePay.svg";
import Rating from "react-rating";
import {
  BsPerson,
  BsTruck,
  BsGift,
  BsStar,
  BsStarFill,
  BsArrowRight,
} from "react-icons/bs";

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

  const [quantity, setQuantity] = useState(1);

  const reviews = product?.reviews ?? [];

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
            <div className="product-details__container">
              <h2 className="product-details__title">{product.title}</h2>

              <p className="product-details__price">{product.price} $ USD</p>

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

              <div className="product-details_member-benefits-section">
                <div className="product-details_member-benefits-icon-container">
                  <BsPerson className="product-details_member-benefits-icon" />
                </div>
                <div className="product-details__member-benefits-copy">
                  <p className="product-details__member-benefits-lead">
                    Become a member to unlock more member only benefits!
                  </p>
                  <div className="product-details__member-benefits-list">
                    <div className="product-details__member-benefit-item">
                      <BsTruck
                        className="product-details__member-benefit-icon"
                        aria-hidden
                      />
                      <p className="product-details__member-benefit-text">
                        Free shipping
                      </p>
                    </div>
                    <div className="product-details__member-benefit-item">
                      <BsGift
                        className="product-details__member-benefit-icon"
                        aria-hidden
                      />
                      <p className="product-details__member-benefit-text">
                        30% off
                      </p>
                    </div>
                    <div className="product-details__member-benefit-item">
                      <BsStar
                        className="product-details__member-benefit-icon"
                        aria-hidden
                      />
                      <p className="product-details__member-benefit-text">
                        Get 100 Points
                      </p>
                    </div>
                  </div>
                </div>
                <BsArrowRight className="product-details_arrow-right-icon" />
              </div>

              <div className="product-details__payment-methods">
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--add-to-cart"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--buy-now"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--paypal"
                >
                  <img src={PayPalLogo} alt="PayPal" />
                </button>
                <button
                  type="button"
                  className="product-details__payment-button product-details__payment-button--apple-pay"
                >
                  <img src={ApplePayLogo} alt="Apple Pay" />
                </button>
              </div>
              <img
                className="product-details__free-shipping-banner"
                src={freeShippingBanner}
                alt="free shipping banner"
              />
            </div>
          </div>

          <div className="product-details_customers-reviews-section">
            <h2 className="customers-reviews_title">
              Customers reviews ({reviews.length})
            </h2>

            {reviews.map((review, index) => (
              <div
                key={`${product.id}-review-${index}`}
                className="customers-reviews_comment-container"
              >
                 <div className="customers-rewiews_comment-author-container">
                    <p className="customers-reviews_comment-author">
                      {review.reviewerName}
                    </p>
                    <p className="customers-reviews_comment-date">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                

                <p className="customers-reviews_comment">{review.comment}</p>
                <div
                  className="customers-reviews_stars-container"
                  role="img"
                  aria-label={`Rating ${review.rating} out of 5`}
                >
                    <Rating
                  initialRating={review.rating}
                  readonly
                  emptySymbol={
                    <BsStar
                      className="customers-reviews__star customers-reviews__star--empty"
                      aria-hidden
                    />
                  }
                  fullSymbol={
                    <BsStarFill
                      className="customers-reviews__star customers-reviews__star--full"
                      aria-hidden
                    />
                  }
                />
                 
                </div>
              

              </div>
            ))}
          </div>

          <div className="also-like-container"></div>
        </div>
      )}
    </>
  );
}
