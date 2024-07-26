/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoSearchOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { sellerDetails } from "../../utils/constants";
import { easeInOut, motion } from "framer-motion";
import Loader from "./Loader";
import Product from "../Product";
import useFetch from "../../hooks/useFetch";

const SearchComp = () => {
  const navigate = useNavigate();
  const [theme] = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const { prod, loading } = useFetch("https://fakestoreapi.com/products");

  const [data, setData] = useState<ProductProps[]>([]);

  useEffect(() => {
    setData(prod);
  }, [prod]);

  const handleAdvancedSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const handleProductClick = (id: number) => {
    window.location.href = `/shop/product/${id}`;
  };

  const handleSearch = () => {
    setFiltered(filteredProducts);
  };

  const handleSearchFilter = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (search.trim()) {
      navigate(`/shop/search?query=${encodeURIComponent(search)}`);
    }
    setFilteredProducts(filtered);
  }, [search, data]);

  return (
    <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] inset-0 p-2 block">
      <div className="w-full p-2">
        <Link to={"/shop"}>
          <IoIosArrowBack size={24} />
        </Link>
      </div>
      <div className="bg-secondary rounded-lg p-2 space-y-6">
        <div className="w-full py-4 bg-secondary h-auto justify-between flex items-center shadow-md p-4 border border-[grey]">
          <input
            type="text"
            placeholder="search..."
            className="w-full outline-none placeholder:text-sm bg-[transparent]"
            value={search}
            onChange={handleSearchFilter}
          />
          <IoSearchOutline size={24} onClick={handleSearch} />
        </div>
        {/*  <div className="w-full bg-secondary h-auto p-2 space-y-2 max-h-28 overflow-y-scroll">
          {search !== "" && filteredProducts?.map((prod) => (
            <div key={prod.id} className="bg-white shadow-lg w-full min-w-sm" onClick={()=>{
              window.location.href = `/shop/product/${prod.id}`
            }}>
              <span className="text-ellipsis">{prod.title}</span>
            </div>
          ))}
        </div> */}
        <div className="space-y-4 bg-[transparent]">
          <div className="flex justify-between py-2">
            <h1 className="text-[white] text-sm ">Advanced</h1>
            {searchToggle == true ? (
              <FaToggleOn size={24} onClick={handleAdvancedSearch} />
            ) : (
              <FaToggleOff size={24} onClick={handleAdvancedSearch} />
            )}
          </div>
          {searchToggle && (
            <motion.div
              initial={{
                opacity: 1,
              }}
              transition={{
                ease: easeInOut,
                duration: 2000,
              }}
              animate={{
                opacity: 1,
                transition: easeInOut,
              }}
              className="space-y-4 transition-all"
            >
              <div className="space-y-2">
                <h1 className="text-[grey] text-sm">Filter by budget</h1>
                <div className="flex space-x-4 overflow-x-scroll">
                  <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                    <span>0-$20</span>
                  </div>
                  <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                    <span>20-$40</span>
                  </div>
                  <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                    <span>40-$60</span>
                  </div>
                  <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                    <span>$60+</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-[grey] text-sm">Filter by seller</h1>
                <div className="flex space-x-4 overflow-x-scroll">
                  {sellerDetails.map((seller) => (
                    <div
                      className="flex py-2 px-4 min-w-fit cursor-pointer bg-transparent border border-primary text-sm items-center truncate"
                      key={seller.id}
                    >
                      <span>{seller.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`flex py-4 px-6 cursor-pointer text-base items-center justify-center ${
                  theme === "dark"
                    ? "bg-primary text-[black]"
                    : "bg-secondary text-[white]"
                }`}
              >
                <span className="font-semibold">Search</span>
              </div>
            </motion.div>
          )}
        </div>
        <section>
          <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-6 md:overflow-hidden">
            {loading && <Loader />}
            {search !== "" &&
              filteredProducts?.map((item) => (
                <Product
                  id={item.id}
                  image={item.image}
                  category={item.category}
                  price={item.price}
                  title={item.title}
                  key={item.id}
                  onclick={() => {
                    handleProductClick(item.id);
                  }}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchComp;
