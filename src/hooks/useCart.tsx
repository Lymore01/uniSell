import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const useCart = (initialItems: CartItem[]) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("uniSell-cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else if (initialItems.length > 0) {
      setCart(initialItems);
      localStorage.setItem("uniSell-cart", JSON.stringify(initialItems));
    }
  }, [initialItems]);

  useEffect(() => {
    localStorage.setItem("uniSell-cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return { cart, addItemToCart };
};

export default useCart;
