import { Link } from "react-router-dom";
import Layout from "../Layout";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Dashboard = () => {
  return (
    <Layout title="Hi, Omil">
      <section className="flex flex-col p-2 gap-5 md:w-full">
        <h1 className="font-medium text-xl">My Portfolio</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-full gap-2 drop-shadow-md">
          <div className="bg-secondary text-[white] flex flex-col w-full h-[80px] border border-[grey] p-2 justify-between">
            <h1 className="capitalize ">Total products</h1>
            <span className="text-3xl">8</span>
          </div>
          <div className="bg-secondary text-[white] flex flex-col w-full h-[80px] border border-[grey] p-2 justify-between">
            <h1 className="capitalize ">Total sales</h1>
            <span className="text-3xl">4</span>
          </div>
          <div className="bg-secondary text-[white] flex flex-col w-full h-[80px] border border-[grey] p-2 justify-between">
            <h1 className="capitalize ">Total orders</h1>
            <span className="text-3xl text-[green]/80">4</span>
          </div>
          <Link to={"/shop/admin/orders"} className="bg-secondary text-[white] flex flex-col w-full h-[80px] border border-[grey] p-2 items-center justify-center">
            <h1 className="capitalize flex flex-row items-center gap-2">view orders <span><FaArrowRight /></span></h1>
          </Link>
        </div>
        <div className="w-auto">
          <div className="flex justify-between items-center">
            <h1 className="font-medium text-xl">My Products</h1>
            <Link
              to={"/shop/admin/add-product"}
              className="flex py-2 px-4 cursor-pointer  text-base items-center bg-primary shadow-md"
            >
              <IoIosAdd size={20} fill="black" />
              <span className="text-[black]">Add</span>
            </Link>
          </div>
          <hr className="mt-2 mb-2" />
          <div className="grid grid-cols-1 gap-2 drop-shadow-md">
            <div className="grid grid-cols-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dl7UYviYAkh4l73Y-4a_B7FkAVmv4lO-ow&s"
                alt="product 15"
                className="object-center object-cover rounded-lg size-20"
              />

              <div className="flex flex-col gap-1 items-start justify-center relative">
                <h1 className="text-sm font-semibold capitalize text-ellipsis line-clamp-1">
                  Nike Air Zoom Pegasus 38
                </h1>
                
                <span className="font-semibold text-sm text-[green]/80">
                  $50.00
                </span>
              </div>
              <div className="w-full flex centreing relative">
                <div className="w-[70%] mx-auto h-auto px-2 flex justify-between items-center">
                  <span className="font-semibold">1</span>
                </div>
                <div className="w-full h-4 flex centreing gap-4">
                  <div className="flex py-2 px-4 cursor-pointer text-base items-center shadow-lg">
                    <span className="flex items-center gap-1 md:gap-2">
                      <MdEdit /> 
                      <span className="hidden md:flex">edit</span>
                    </span>
                  </div>
                  <div className="flex py-2 px-4 cursor-pointer text-base bg-[red]/80 items-center shadow-lg">
                    <span className="text-[white]">X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
