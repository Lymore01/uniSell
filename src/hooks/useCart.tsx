import { useEffect, useState } from "react";

export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("uniSell-cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uniSell-cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item: CartItem) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      setNotification(`${item.title} is already in the cart.`);
    } else {
      setCart((prevCart) => [...prevCart, item]);
      setNotification(`${item.title} has been added to the cart.`);
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const removeItemFromCart = (itemId: string) => {
    const updateCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updateCart);

    setNotification(`Item has been removed from the cart.`);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return { cart, addItemToCart,removeItemFromCart, notification };
};

export default useCart;
