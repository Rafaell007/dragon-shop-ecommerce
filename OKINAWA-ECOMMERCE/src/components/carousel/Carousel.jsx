import "./Carousel.css";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "motion/react";

export function Carousel({ items, motionKey, onEmblaApiReady, renderSlide, className }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const sectionClass = className ? `carousel ${className}` : "carousel";

  useEffect(() => {
    onEmblaApiReady?.(emblaApi ?? null);
    return () => onEmblaApiReady?.(null);
  }, [emblaApi, onEmblaApiReady]);

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, items]);

  return (
    <AnimatePresence mode="wait">
      <motion.section
        className={sectionClass}
        key={motionKey}
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
            {items.map((item) => (
              <div className="carousel-slide" key={item.id}>
                {renderSlide(item)}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
