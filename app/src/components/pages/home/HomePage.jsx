import { Header } from "../../header/Header.jsx";
import { Hero } from "../../hero/Hero.jsx";
import { TrendingItems } from "./TrendingItems.jsx";
import { ShopByStyle } from "./ShopByStyle.jsx";
import { ShopByTheme } from "./ShopByTheme.jsx";
import { AccesoriesSection } from "./AccesoriesSection.jsx";
import { AboutUsSection } from "./AboutUsSection.jsx";
import { Footer } from "../../footer/Footer.jsx";

export function HomePage() {
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
