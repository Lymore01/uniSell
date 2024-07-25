import { CiMenuKebab } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <section className="p-6 flex flex-col gap-5 relative h-screen h-max-screen">
      <nav className="flex flex-row justify-between">
        <Link to={"/shop"}>
          <IoIosArrowBack size={24} />
        </Link>
        <span className="flex space-x-2">
          <GoHeart size={24} />
          <CiMenuKebab size={24} />
        </span>
      </nav>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <span className="text-[grey] text-xs capitalize font-semibold">
            Seller
          </span>
          <h1 className="text-3xl font-semibold capitalize">Thrift by Mso😊</h1>
        </div>
        
        <div>
          <p className="line-clamp-3 text-[grey] text-sm">
            Satisfaction Guaranteed. Return or exchange any order within 30
            days.Designed and sold by Hafeez Center in the United States.
            Satisfaction Guaranteed. Return or exchange any order within 30
            days.
          </p>
          <span className="text-sm capitalize text-[green]/80 font-semibold">
            Read more
          </span>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-base font-semibold">Categories</h1>
          <span className="text-sm cursor-pointer text-[grey]">see more</span>
        </div>
        <div className="flex space-x-4 overflow-x-scroll">
          <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-secondary text-[white] text-sm items-center">
            <span>Pants</span>
          </div>
          <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center w-auto">
            <span>shirts</span>
          </div>
          <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
            <span>Hoodie</span>
          </div>

          <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
            <span>Ankara</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller;
