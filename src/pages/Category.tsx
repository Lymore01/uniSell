import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const results = await res.json();
      if (!results) {
        console.log("no results");
      }

      setData(results);
    };

    fetchData();
  }, []);
  return (
    <section className="p-6 flex flex-col gap-5 relative">
      <nav className="flex flex-row justify-between">
        <Link to={"/shop"}>
          <IoIosArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-semibold mx-auto">Pants</h1>
        <span>
          <IoSearchOutline size={22} />
        </span>
      </nav>
      <p className="text-sm text-[grey]">Sellers</p>
      <div className="flex space-x-4 overflow-x-scroll">
        <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-secondary text-[white] text-sm items-center">
          <span>All</span>
        </div>
        <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center">
          <span>Janjez</span>
        </div>
        <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center w-auto">
          <span>Mso</span>
        </div>
        <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
          <span>Maggy</span>
        </div>

        <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
          <span className="text-ellipsis">Andy's</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {data.splice(4, 10)?.map((item) => (
          <Product
            image={item.image}
            category={item.category}
            price={item.price}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
