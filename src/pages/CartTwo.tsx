import { IoMdCloseCircle } from "react-icons/io";
import NavLayout from "./NavLayout";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import useCart from "../hooks/useCart";

const CartTwo = () => {
  const { cart, removeItemFromCart } = useCart();
  const [totals, setTotal] = useState<number>(0);
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    const prices = cart.map((item) => item.price);
    const total = prices.reduce((item, initial) => item + initial, 0);
    setTotal(total);
  }, [cart]);
  return (
    <NavLayout title="Cart" heart={false}>
      <section className="w-full h-screen md:max-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-4 rounded-lg">
          <hr />
          <table className="min-w-full text-[gray-600]">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 font-semibold">Product</th>
                <th className="py-2 px-4 font-semibold">Quantity</th>
                <th className="py-2 px-4 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr key={item.id} className="">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={item.image}
                      alt="product"
                      className="object-center object-cover rounded-lg w-12 h-12 mr-4"
                    />
                    <div>
                      <h1 className="text-sm font-semibold capitalize text-ellipsis line-clamp-1">
                        {item.title}
                      </h1>
                      <div className="text-xs text-gray-500 truncate line-clamp-1">
                        Thrifts by Mso
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 ">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold cursor-pointer">
                        +
                      </span>
                      <span>1</span>
                      <span className="text-lg font-semibold cursor-pointer">
                        -
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-4">${item.price}</td>
                  <td className="py-2 px-4 flex justify-between items-center hidden">
                    <IoMdCloseCircle
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeItemFromCart(item?.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col gap-4 relative bg-secondary text-[white] rounded-lg">
          
          <table className="min-w-full text-[gray-600]">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 font-semibold">Shop</th>
                <th className="py-2 px-4 font-semibold">Total</th>
                <th className="py-2 px-4 font-semibold">Pay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="py-2 px-4 flex items-center">
                  <div className="text-xs text-[gray-500] truncate line-clamp-1">
                    Thrifts by Mso
                  </div>
                </td>
                <td className="py-2 px-4 ">
                  <div>$300</div>
                </td>

                <td className="py-2 px-4 flex justify-between items-center">
                  <button className="px-4 py-1 flex items-center justify-center rounded-md cursor-pointer font-semibold capitalize bg-primary text-[black]">
                    pay
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </NavLayout>
  );
};

export default CartTwo;
