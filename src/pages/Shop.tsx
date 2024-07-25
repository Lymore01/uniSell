import { useEffect, useState } from "react";
import Product from "../components/Product";
import Layout from "./Layout";
import Sellers from "../components/Sellers";
import { Link } from "react-router-dom";


const Shop = () => {
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

  const handleProductClick = (id: number) => {
    window.location.href = `/shop/product/${id}`;
  };

  return (
    <Layout title="Let's go">
      <main className="w-full h-auto flex flex-col gap-4 relative">
        <div className="w-full rounded-lg bg-primary h-[200px]"></div>
        <div className="gap-4 flex flex-col sticky top-0 left-0 bg-[white] px-2">
          <div className="flex justify-between items-center">
            <h1 className="text-base font-semibold">Clothes</h1>
            <span className="text-sm cursor-pointer text-[grey]">see more</span>
          </div>
          <div className="flex space-x-4 overflow-x-scroll">
            <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center">
              <span>All</span>
            </div>
            <Link to={"/shop/category/pants"} className="flex py-2 px-3 cursor-pointer rounded-lg bg-secondary text-[white] text-sm items-center">
              <span>Pants</span>
            </Link>
            <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center">
              <span>Shoes</span>
            </div>
            <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center w-auto">
              <span>shirts</span>
            </div>
            <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
              <span>Hoodie</span>
            </div>
            <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
              <span>Shorts</span>
            </div>
            <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm  items-center">
              <span>Ankara</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 overflow-x-scroll">
          {data.splice(4, 10)?.map((item) => (
            <Product
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

        <div className="flex flex-col gap-4 w-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-base font-semibold">Popular sellers</h1>
            <span className="text-sm cursor-pointer text-[grey]">see all</span>
          </div>
          <div className="flex flex-row gap-4 overflow-x-scroll">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Sellers
                key={index}
                shopDescription="we sell ladies clothes"
                shopName="Thrifts by Mso"
                shopLogo="src\assets\uniSell-logo-black.png"
              />
            ))}
          </div>
        </div>
      </main>
     
    </Layout>
  );
};

export default Shop;


// TODO : implement navigation for different categories
