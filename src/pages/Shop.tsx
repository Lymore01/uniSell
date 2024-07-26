import { useContext, useEffect, useState } from "react";
import Product, { ProductProps } from "../components/Product";
import Layout from "./Layout";
import Sellers from "../components/Sellers";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import useFetch from "../hooks/useFetch";
import { CategoryList } from "../components/shared/CategoryList";
import { GiClothes } from "react-icons/gi";
import { GiElectricalResistance } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaKitchenSet } from "react-icons/fa6";
import { GiLipstick } from "react-icons/gi";
import { IoTennisball } from "react-icons/io5";
import Loader from "../components/ui/Loader";
import { sellerDetails } from "../utils/constants";

const Shop = () => {
  const [theme] = useContext(ThemeContext);

  const { prod, loading } = useFetch("https://fakestoreapi.com/products");

  const [data, setData] = useState<ProductProps[]>([]);

  useEffect(() => {
    setData(prod);
  }, [prod]);

  const handleProductClick = (id: number) => {
    window.location.href = `/shop/product/${id}`;
  };

  return (
    <Layout title="Let's go">
      <main className="w-full h-auto flex flex-col gap-4 relative">
        {/* <div className="w-full rounded-lg bg-primary h-[200px] md:w-[60%] mx-auto "></div> */}
        <div
          className={`gap-4 flex flex-col sticky top-0 left-0 px-2 ${
            theme === "light" ? "bg-[white]" : "bg-secondary"
          }`}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-base font-semibold">Categories</h1>
            <span className="text-sm cursor-pointer text-[grey]">see all</span>
          </div>
          <div
            className={`flex space-x-4 overflow-x-scroll  ${
              theme === "light" ? "text-[black]" : "text-[black]"
            } `}
          >
            <Link
              to={"/shop/category/pants"}
              className="flex py-2 px-3 cursor-pointer rounded-lg bg-[black] text-[white] text-sm items-center"
            >
              <span>All</span>
            </Link>
            <CategoryList
              title="Clothes"
              icon={<GiClothes />}
              href="/shop/category/clothes"
            />

            <CategoryList
              title="Electronics"
              icon={<GiElectricalResistance />}
              href="/shop/category/electronics"
            />

            <CategoryList
              title="Food"
              icon={<MdFastfood />}
              href="/shop/category/food"
            />

            <CategoryList
              title="Books"
              icon={<ImBooks />}
              href="/shop/category/books"
            />
            <CategoryList
              title="Kitchen"
              icon={<FaKitchenSet />}
              href="/shop/category/kitchen"
            />

            <CategoryList
              title="Beauty"
              icon={<GiLipstick />}
              href="/shop/category/beauty"
            />

            <CategoryList
              title="sports"
              icon={<IoTennisball />}
              href="/shop/category/sports"
            />
          </div>
        </div>

        <div className="flex flex-row gap-4 overflow-x-scroll md:grid md:grid-cols-6 md:overflow-hidden">
          {loading && <Loader />}
          {data?.map((item) => (
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

        <div className="flex flex-col gap-4 w-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-base font-semibold">Popular sellers</h1>
            <span className="text-sm cursor-pointer text-[grey]">see all</span>
          </div>
          <div className="flex flex-row gap-4 overflow-x-scroll md:grid md:grid-cols-6 md:overflow-hidden">
            {sellerDetails.map((detail) => (
              <Sellers
                key={detail.id}
                id={detail.id}
                shopDescription={"Seller"}
                shopName={detail.title}
                shopLogo="src\assets\uniSell-logo-black.png"
                backGround={detail.themeColor}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Shop;

export type CategoryListProps = {
  title: string;
};


