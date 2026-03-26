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
      <div className="product-details_customers-reviews-section">
        <h2 className="customers-reviews_title">
          Customers reviews ({reviews.length})
        </h2>

        {displayedReviews.map((review, index) => (
          <motion.div
            key={`${productId}-review-${index}`}
            className="customers-reviews_comment-container"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,

              ease: [0.22, 1, 0.36, 1],

              delay: index * 0.06,
            }}
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
          </motion.div>
        ))}

        {canShowMore && (
          <button
            type="button"
            className="customers-reviews_show-more-button"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            <BsChevronDown aria-hidden />
          </button>
        )}
      </div>
    </>
  );
}
