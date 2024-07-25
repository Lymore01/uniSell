import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <section className="p-6 flex flex-col gap-5 relative h-screen h-max-screen">
      <nav className="flex flex-row justify-between">
        <Link to={"/shop/admin"}>
          <IoIosArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-semibold mx-auto">Orders</h1>
        <span className="flex space-x-2">
          <CiMenuKebab size={24} />
        </span>
      </nav>
      <div className="w-full p-4 bg-[transparent] h-auto justify-between flex items-center border border-[grey]/10">
        <input
          type="text"
          placeholder="search..."
          className="w-full outline-none placeholder:text-sm bg-[transparent]"
        />
        <IoSearchOutline size={24} />
      </div>
      <main>
        <div className="grid grid-cols-1 gap-2 drop-shadow-sm">
          <div className="grid grid-cols-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dl7UYviYAkh4l73Y-4a_B7FkAVmv4lO-ow&s"
              alt="product 15"
              className="object-center object-cover rounded-lg size-16"
            />

            <div className="flex flex-col gap-1 items-start justify-center relative">
              <h1 className="text-sm font-semibold capitalize text-ellipsis line-clamp-1">
                Nike Air Zoom Pegasus 38
              </h1>
              <div className="text-[grey] text-xs truncate line-clamp-1">
                limo23@gmail.com
              </div>
              <span className="font-semibold text-sm text-[green]/80">
                $50.00
              </span>
            </div>
            <div className="w-full flex items-center justify-center relative ">
              <div className=" w-full h-4 flex items-center justify-center">
                <div className="flex py-2 px-4 cursor-pointer text-base items-center bg-[green]/50 rounded-md">
                  <span className="text-xs text-[green]">paid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Orders;
