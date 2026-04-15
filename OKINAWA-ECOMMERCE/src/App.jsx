import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import "./App.css";
import { HomePage } from "./components/pages/home/HomePage";
import { ProductsPage } from "./components/pages/products/ProductsPage.jsx";
import { CartProvider } from "./context/CartContext";
import { ProductDetailsPage } from "./components/pages/product-details/ProductDetailsPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products/category/:categorySlug" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
