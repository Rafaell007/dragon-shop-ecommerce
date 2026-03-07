import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./components/pages/home/HomePage";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
