import { createContext, useContext, useState, useEffect, useMemo } from "react";


const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartProducts, setCartProducts] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function addToCart(product) {
    const existingProduct = cartProducts.find(
      (item) => item.id === product.id
    );

    const addQuantity = Math.max(1, Number(product.quantity) || 1);

    if (existingProduct) {
      setCartProducts((prevProducts) => {
        return prevProducts.map((item) => {
          return item === existingProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    } else {
      setCartProducts((prevProducts) => [
        ...prevProducts,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          priceCents: product.priceCents,
          quantity: addQuantity,
        },
      ]);
    }
  }

  function removeFromCart(product) {
    const existingProduct = cartProducts.find(
      (item) => item.id === product.id
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

  function deleteFromCart(product) {
    setCartProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id),
    );
  }

  const totalPrice = useMemo(() => {
    return cartProducts.reduce(
      (total, product) => total + (product.priceCents / 100) * product.quantity,
      0,
    );
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        removeFromCart,
        deleteFromCart,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
