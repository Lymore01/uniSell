import { useContext, useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import NavLayout from "./NavLayout";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cart, removeItemFromCart } = useCart();
  const [totals, setTotal] = useState<number>(0)
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    const prices = cart.map((item) => item.price);
    const total = prices.reduce((item, initial) => item + initial, 0);
    setTotal(total)
  }, [cart]);

  return (
    <NavLayout title="Cart" heart={false}>
      <div className="flex flex-row gap-2 mt-4 h-screen">
        {/* product */}
        {cart.length == 0 && (
          <p>No items in the cart!</p>
        )}
        <p>products</p>
        {cart?.map((item) => (
          <div className="flex flex-row gap-6" key={item.id}>
            <img
              src={item.image}
              alt="product 15"
              className="object-center object-cover rounded-lg size-20"
            />

            <div className="flex flex-col gap-1 items-start justify-start relative">
              <h1 className="text-sm font-semibold capitalize text-ellipsis line-clamp-1">
                {item.title}
              </h1>
              <div className="text-[grey] text-xs truncate line-clamp-1">
                Thrifts by Mso
              </div>
              <span className="font-semibold text-sm text-[green]/80">
                ${item.price}
              </span>
            </div>
            <div className="w-full flex items-start justify-start relative">
              <div className="w-[70%] mx-auto h-auto px-2 flex justify-between border-[grey]/20 border items-center">
                <span className="text-lg font-semibold cursor-pointer">+</span>
                <span>1</span>
                <span className="text-lg font-semibold cursor-pointer">-</span>
              </div>
              <div className="absolute inset-0 top-0 right-0 w-full h-4 flex items-end justify-end">
                <span className="text-[secondary] font-bold cursor-pointer size-auto" onClick={()=>{
                  removeItemFromCart(item?.id)
                }}>
                  <IoMdCloseCircle className="cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
        ))}

        <div
          className={`h-screen mx-auto ${
            theme === "light" ? "bg-[white]" : "bg-secondary"
          } p-4`}
        >
          <hr />
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold text-3xl text-[green]/80">
              ${totals}
            </span>
            <div className="flex justify-between items-center">
              <Link
                to={"/shop/order-details"}
                className={`flex py-4 px-6 cursor-pointer rounded-lg text-base items-center ${
                  theme === "dark"
                    ? "bg-primary text-[black]"
                    : "bg-secondary text-[white]"
                }`}
              >
                <span className="font-semibold">Checkout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default Cart;
