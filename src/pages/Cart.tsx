import { useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import NavLayout from "./NavLayout";

const Cart = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <NavLayout title="Cart" heart={false}>
      <div className="flex flex-col gap-2 mt-4 relative h-screen">
        {/* product */}
        <div className="grid grid-cols-3 drop-shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dl7UYviYAkh4l73Y-4a_B7FkAVmv4lO-ow&s"
            alt="product 15"
            className="object-center object-cover rounded-lg size-20"
          />

          <div className="flex flex-col gap-1 items-start justify-center relative">
            <h1 className="text-sm font-semibold capitalize text-ellipsis line-clamp-1">
              Nike Air Zoom Pegasus 38
            </h1>
            <div className="text-[grey] text-xs truncate line-clamp-1">
              Thrifts by Mso
            </div>
            <span className="font-semibold text-sm text-[green]/80">
              $50.00
            </span>
          </div>
          <div className="w-full flex items-center justify-center relative">
            <div className="w-[70%] mx-auto h-auto px-2 flex justify-between border-[grey]/20 border items-center">
              <span className="text-lg font-semibold cursor-pointer">+</span>
              <span>1</span>
              <span className="text-lg font-semibold cursor-pointer">-</span>
            </div>
            <div className="absolute inset-0 top-0 right-0 w-full h-4 flex items-end justify-end">
              <span className="text-[secondary] font-bold cursor-pointer size-auto ">
                <IoMdCloseCircle className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
        <div
          className={`fixed bottom-0 left-0 md: w-full md:w-[80%] mx-auto ${
            theme === "light" ? "bg-[white]" : "bg-secondary"
          } p-4`}
        >
          <hr />
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold text-3xl text-[green]/80">
              $50.00
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
