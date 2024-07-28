/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { ProductProps } from "../components/Product";
import NavLayout from "./NavLayout";
import useCart, { CartItem } from "../hooks/useCart";
import ReadMore from "../components/shared/ReadMore";

const ProductDetails = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const [data, setData] = useState<ProductProps | null>(null);
  const [toCart, setToCart] = useState<CartItem[]>([]);
  const { id } = useParams();
  const { prod } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { cart, addItemToCart, notification } = useCart();

  useEffect(() => {
    setData(prod);
  }, [prod]);

  const handleAddToCart = () => {
    addItemToCart(data);
  };

  if (notification) {
    alert(notification);
  }



  return (
    <NavLayout title="" heart={true}>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:hidden">
          <span className="text-[grey] text-xs capitalize font-semibold">
            {data?.category}
          </span>
          <h1 className="text-3xl font-semibold capitalize">{data?.title}</h1>
        </div>
        <div className="space-y-4">
          <img
            src={data?.image}
            alt="data?uct 15"
            className="object-center object-cover rounded-lg md:size-84 md:min-w-80 md:min-h-80"
          />
          <div className="flex space-x-2">
            <img
              src={data?.image}
              className="object-center object-cover rounded-lg size-20"
            />
            <img
              src="https://cdn.runrepeat.com/storage/gallery/product_primary/39036/nike-zoom-fly-5-21237194-main.jpg"
              alt="product 15"
              className="object-center object-cover rounded-lg size-20 ring-2 ring-secondary"
            />
          </div>
        </div>
        <div className="space-y-4 mx-auto">
          <div className="hidden flex-col md:flex">
            <span className="text-[grey] text-xs capitalize font-semibold">
              {data?.category}
            </span>
            <h1 className="text-3xl font-semibold capitalize">{data?.title}</h1>
          </div>

          <ReadMore>{data?.description}</ReadMore>

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Size</span>
              <div className="flex py-2 px-3 cursor-pointer rounded-lg bg-primary text-sm items-center">
                <span>42</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Color</span>
              <div className="flex py-2 px-3 cursor-pointer rounded-lg text-sm items-center bg-[black]">
                <span className="text-[white]">Black</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center">
            <span className="font-semibold text-xl text-[green]/80">
              ${data?.price}
            </span>
            <Link
              to={"/shop/cart"}
              className="flex py-4 px-6 cursor-pointer rounded-lg text-base items-center bg-primary"
            >
              <span className="text-[white]">Add to cart</span>
            </Link>
          </div>
        </div>

        <hr />
        <div className="flex md:hidden justify-between items-center">
          <span className="font-semibold text-xl text-[green]/80">
            ${data?.price}
          </span>
          <div
            className="flex py-4 px-6 cursor-pointer rounded-lg text-base items-center bg-primary"
            onClick={handleAddToCart}
          >
            <span className="text-[white]">Add to cart</span>
          </div>
        </div>
        <Link
          to={"/shop/cart"}
          className="w-full items-center space-x-2 justify-end flex"
        >
          <span>Go to cart</span>
          <FaArrowRight />
        </Link>
      </div>
    </NavLayout>
  );
};

export default ProductDetails;
