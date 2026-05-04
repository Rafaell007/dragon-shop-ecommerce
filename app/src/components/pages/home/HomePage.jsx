import { Header } from "../../header/Header.jsx";
import { Hero } from "../../hero/Hero.jsx";
import { TrendingItems } from "./TrendingItems.jsx";
import { ShopByStyle } from "./ShopByStyle.jsx";
import { ShopByTheme } from "./ShopByTheme.jsx";
import { AccesoriesSection } from "./AccessoriesSection.jsx";
import { AboutUsSection } from "./AboutUsSection.jsx";
import { Footer } from "../../footer/Footer.jsx";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function HomePage() {
   useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    const cb = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(cb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(cb);
    };
  }, []);
  return (
    <>
      <Header />
      <main className="page-content">
        <Hero />
        <TrendingItems />
        <ShopByStyle />
        <ShopByTheme />
        <AccesoriesSection />
        <AboutUsSection />
      </main>
      <Footer footerType="home-footer" />
    </>
  );
}
