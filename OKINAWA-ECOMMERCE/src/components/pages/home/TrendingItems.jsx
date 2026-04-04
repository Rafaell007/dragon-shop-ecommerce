import "./TrendingItems.css";
import { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { Carousel } from "../../carousel/Carousel.jsx";
import { ScrollBar, useScrollBar } from "../../carousel/ScrollBar.jsx";
import { Product } from "./Product";
import { GsapTextAnimation } from "./GsapTextAnimation.jsx";

const PRODUCTS_URL = "https://dummyjson.com/products";




export function TrendingItems() {
  const [activeTab, setActiveTab] = useState("popular");
  const [products, setProducts] = useState([]);
  const [emblaApi, setEmblaApi] = useState(null);

  const { value, onScrollBarChange } = useScrollBar(emblaApi);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get(PRODUCTS_URL, { params: { limit: 200 } });
        if (!cancelled) setProducts(Array.isArray(data.products) ? data.products : []);
      } catch {
        if (!cancelled) setProducts([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const carouselProducts = useMemo(() => {
    const sortKey = activeTab === "popular" ? "rating" : "discountPercentage";
    return [...products].sort((a, b) => b[sortKey] - a[sortKey]).slice(0, 10);
  }, [products, activeTab]);


  const trendingRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <>
      <GsapTextAnimation
        sectionRef={trendingRef}
        titleRef={titleRef}
        dependencies={[products.length]}
      />
      <div ref={trendingRef} className="trending">
        <div className="trending__header">
          <h2 ref={titleRef} className="trending__title">
            everyone likes to buy
          </h2>
          <div className="trending__toolbar">
            <div className="trending__tabs">
              <button
                type="button"
                className={`trending__tab${activeTab === "popular" ? " trending__tab--active" : ""}`}
                onClick={() => setActiveTab("popular")}
              >
                popular items
              </button>
              <button
                type="button"
                className={`trending__tab${activeTab === "sale" ? " trending__tab--active" : ""}`}
                onClick={() => setActiveTab("sale")}
              >
                sale items
              </button>
            </div>

            <ScrollBar value={value} onChange={onScrollBarChange} />
          </div>
        </div>
        <Carousel
          items={carouselProducts}
          motionKey={activeTab}
          onEmblaApiReady={setEmblaApi}
          renderSlide={(p) => <Product product={p} />}
        />
      </div>
    </>
  );
}
