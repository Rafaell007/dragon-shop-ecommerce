import { Header } from "../../header/Header.jsx";
import { Hero } from "../../hero/Hero.jsx";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage() {
    return (
        <>
        <Header />
        <Hero />
        <ProductsGrid />
        </>
    )
}