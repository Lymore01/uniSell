import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import useCart from "../hooks/useCart";

const OrderDetails = () => {
  const [theme] = useContext(ThemeContext);
  const { cart } = useCart();

  return (
    <section className="p-6 flex flex-col gap-5 relative md:w-[80%] mx-auto">
      <nav className="flex flex-row justify-between">
        <Link to={"/shop/cart"}>
          <IoIosArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-semibold mx-auto">Order details</h1>
        <span className="flex space-x-2">
          <CiMenuKebab size={24} />
        </span>
      </nav>
      <div className="flex flex-col gap-2 mt-4 relative h-screen drop-shadow-md ">
        <div className="grid grid-rows-2 gap-4">
          <table
            className={`min-w-full ${
              theme === "light"
                ? "bg-secondary text-[white]"
                : "bg-secondary text-[white]"
            }  border border-[grey]`}
          >
            <thead>
              <tr className="w-full bg-gray-200 text-left">
                <th className="py-2 px-4 font-semibold text-gray-600">
                  Product
                </th>
                <th className="py-2 px-4 font-semibold text-gray-600">Price</th>
                <th className="py-2 px-4 font-semibold text-gray-600">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr className="w-full max-h-[30px]" key={item.id}>
                  <td className="py-2 px-4 text-sm  capitalize font-semibold">
                    {item.title}
                  </td>
                  <td className="py-2 px-4 text-sm font-semibold text-[green]/80">
                    ${item.price}
                  </td>
                  <td className="py-2 px-4 text-sm text-[gray]/120">1</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className={`flex flex-col gap-4 ${
              theme === "light" ? "bg-[white]" : "bg-secondary"
            }  p-2`}
          >
            <h1
              className={`capitalize font-bold ${
                theme === "light" ? "text-[#001514]" : "text-[white]"
              } `}
            >
              Customer 🤞
            </h1>
            <div className="gap-2 flex flex-col font-medium">
              <div className="flex justify-between text-sm">
                <p className="font-bold">Name</p>
                <p>Yllek Omil</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="font-bold">Email</p>

                <p className="">omil@gmail.com</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="font-bold">Contact</p>

                <p>0719520494</p>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col gap-4 ${
              theme === "light" ? "bg-[white]" : "bg-secondary"
            } p-2`}
          >
            <h1
              className={`capitalize font-bold ${
                theme === "light" ? "text-[#001514]" : "text-[white]"
              } `}
            >
              Pick-up point 🚚
            </h1>
            <div className="gap-2 flex flex-col font-medium">
              <div className="flex justify-between items-center">
                <FaLocationDot
                  size={18}
                  className={`${
                    theme === "light" ? "stroke-primary" : "stroke-secondary"
                  }`}
                />
                <p>PAC</p>
              </div>
              <div className="flex justify-between items-center">
                <IoTimeSharp
                  size={18}
                  className={`${theme === "light" ? "" : ""}stroke-secondary`}
                />
                <p>4:00pm</p>
              </div>
              <div className="flex justify-between items-center">
                <FaKey
                  size={18}
                  className={`${theme === "light" ? "" : ""}stroke-secondary`}
                />
                <p>328 433</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed bottom-0 left-0 w-full ${
            theme === "light" ? "bg-[white]" : "bg-secondary"
          } p-4`}
        >
          <hr />
          <div className="flex justify-end items-end mt-4">
            <div className="flex justify-between items-center">
              <div
                className={`flex py-4 px-6 cursor-pointer rounded-lg text-base items-center ${
                  theme === "dark"
                    ? "bg-primary text-[black]"
                    : "bg-secondary text-[white]"
                }`}
              >
                <span className="font-semibold">Confirm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
