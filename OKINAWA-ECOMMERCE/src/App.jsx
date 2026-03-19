import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./components/pages/home/HomePage";
import { ProductsPage } from "./components/pages/products/ProductsPage.jsx";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:preset" element={<ProductsPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
