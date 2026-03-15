import "./TrendingItems.css";
import { useState } from "react";
import { Carousel } from "./carousele-scroll-bar/Carousel.jsx";
import useEmblaCarousel from 'embla-carousel-react'
import { ScrollBar, useScrollBar } from './carousele-scroll-bar/ScrollBar.jsx'





export function TrendingItems() {
  const [activeTab, setActiveTab] = useState("popular");


  const OPTIONS = { dragFree: true };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const { value, onScrollBarChange } = useScrollBar(emblaApi)

  return (
    <>
      <div className="categories-container">
        <div className="trending-items-container">
          <h2>everyone likes to buy</h2>
          <div className="trending-items-toggle">
            <div className="toggle-buttons-wrapper">
            <button
              className={activeTab === "popular" ? "active" : ""}
              onClick={() => setActiveTab("popular")}
            >
              popular items
            </button>
            <button
              className={activeTab === "sale" ? "active" : ""}
              onClick={() => setActiveTab("sale")}
            >
              sale items
            </button>

            </div>
            
            <ScrollBar value={value} onChange={onScrollBarChange} />
          </div>
         
        </div>
        <Carousel slides={SLIDES} activeTab={activeTab} emblaRef={emblaRef} emblaApi={emblaApi} />
      </div>
    </>
  );
}
