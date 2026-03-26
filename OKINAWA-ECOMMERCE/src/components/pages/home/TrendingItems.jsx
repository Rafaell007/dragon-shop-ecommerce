import "./TrendingItems.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Carousel } from "../../carousel/Carousel.jsx";
import { ScrollBar, useScrollBar } from "../../carousel/ScrollBar.jsx";
import { Product } from "./Product";

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

  return (
    <>
      <div className="categories-container">
        <div className="trending-items-container">
          <h2>everyone likes to buy</h2>
          <div className="trending-items-toggle">
            <div className="toggle-buttons-wrapper">
              <button
                type="button"
                className={activeTab === "popular" ? "active" : ""}
                onClick={() => setActiveTab("popular")}
              >
                popular items
              </button>
              <button
                type="button"
                className={activeTab === "sale" ? "active" : ""}
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
