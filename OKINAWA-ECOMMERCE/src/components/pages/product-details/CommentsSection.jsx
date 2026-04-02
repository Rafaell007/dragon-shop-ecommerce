import "./CommentsSection.css";

import Rating from "react-rating";

import { BsStar, BsStarFill, BsChevronDown } from "react-icons/bs";

import { useState, useEffect } from "react";

import { motion } from "motion/react";

export function CommentsSection({ reviews, productId }) {
  const [visibleCount, setVisibleCount] = useState(1);

  const displayedReviews = reviews.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(1);
  }, [productId]);

  const canShowMore = visibleCount < reviews.length;

  return (
    <>
      <div className="product-reviews">
        <h2 className="product-reviews__title">
          Customers reviews ({reviews.length})
        </h2>

        {displayedReviews.map((review, index) => (
          <motion.div
            key={`${productId}-review-${index}`}
            className="product-reviews__item"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,

              ease: [0.22, 1, 0.36, 1],

              delay: index * 0.06,
            }}
          >
            <div className="product-reviews__meta">
              <p className="product-reviews__author">
                {review.reviewerName}
              </p>

              <p className="product-reviews__date">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>

            <p className="product-reviews__text">{review.comment}</p>

            <div
              className="product-reviews__stars"
              role="img"
              aria-label={`Rating ${review.rating} out of 5`}
            >
              <Rating
                initialRating={review.rating}
                readonly
                emptySymbol={
                  <BsStar
                    className="product-reviews__star product-reviews__star--empty"
                    aria-hidden
                  />
                }
                fullSymbol={
                  <BsStarFill
                    className="product-reviews__star product-reviews__star--full"
                    aria-hidden
                  />
                }
              />
            </div>
          </motion.div>
        ))}

        {canShowMore && (
          <button
            type="button"
            className="product-reviews__more"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            <BsChevronDown aria-hidden />
          </button>
        )}
      </div>
    </>
  );
}
