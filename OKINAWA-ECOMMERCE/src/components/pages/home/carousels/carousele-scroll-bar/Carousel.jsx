import "./Carousel.css";
import { mockProducts } from "../../../../../data/mockProducts";
import { Product } from "../../Product";
import { AnimatePresence, motion } from "motion/react";

export function Carousel({ emblaRef, activeTab }) {
  const trendingProducts = [...mockProducts]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 10);

  const saleProducts = [...mockProducts]
    .sort((a, b) => a.sold - b.sold)
    .slice(0, 10);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        className="carousel"
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.2 },
          y: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="carousel-viewport" ref={emblaRef}>
          <div className="carousel-track">
            {(activeTab === "popular" ? trendingProducts : saleProducts).map((product) => (
              <div className="carousel-slide" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
