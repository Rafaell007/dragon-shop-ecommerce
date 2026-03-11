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

  function removeFromCart(product){

    const existingProduct = cartProducts.find(
      (item) =>
        item.id === product.id &&
        item.color === product.color &&
        item.size === product.size,
    );

    if (existingProduct && existingProduct.quantity > 1) {
      setCartProducts((prevProducts) => {
       return prevProducts.map((item) => {
         return item === existingProduct
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      });
    } 
    
  }

  function deleteFromCart (product){
    setCartProducts((prevProducts) => prevProducts.filter((item) =>  item.id !== product.id));
  }

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
