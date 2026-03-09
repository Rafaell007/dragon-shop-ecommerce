import { createContext, useContext, useState, useEffect } from "react";
import initialCart from "../data/mockCart.json";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : initialCart;
    } catch {
      return initialCart;
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function addToCart(product) {
    const existingProduct = cartProducts.find(
      (item) =>
        item.id === product.id &&
        item.color === product.color &&
        item.size === product.size,
    );

    if (existingProduct) {
      setCartProducts((prevProducts) => {
       return prevProducts.map((item) => {
         return item === existingProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    } else {
          setCartProducts((prevProducts) =>  [
        ...prevProducts,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          color: product.color,
          size: product.size,
          priceCents: product.priceCents,
          quantity: 1,
          deliveryOptionId: product.deliveryOptionId,
        },
      ]);
    }
  }

  return (
    <CartContext.Provider value={{ cartProducts, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
