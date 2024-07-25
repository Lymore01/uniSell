import { IoIosArrowBack } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <section className="p-6 flex flex-col gap-5 relative h-max-screen">
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
            Shoes for women
          </span>
          <h1 className="text-3xl font-semibold capitalize">
            Nike Air Zoom Pegasus 38
          </h1>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dl7UYviYAkh4l73Y-4a_B7FkAVmv4lO-ow&s"
          alt="product 15"
          className="object-center object-cover rounded-lg"
        />
        <div className="flex space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0frM_IzNuBj6Ld0K5jPdTSsnGgag2Rle_w&s"
            alt="product 15"
            className="object-center object-cover rounded-lg size-20"
          />
          <img
            src="https://cdn.runrepeat.com/storage/gallery/product_primary/39036/nike-zoom-fly-5-21237194-main.jpg"
            alt="product 15"
            className="object-center object-cover rounded-lg size-20 ring-2 ring-secondary"
          />
        </div>
        <div>
            <p className="line-clamp-3 text-[grey] text-sm">Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.</p>
            <span className="text-sm capitalize text-[green]/80 font-semibold">Read more</span>
        </div>
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
        <hr />
        <div className="flex justify-between items-center">
            <span className="font-semibold text-xl text-[green]/80">$50.00</span>
            <Link to={"/shop/cart"} className="flex py-4 px-6 cursor-pointer rounded-lg text-base items-center bg-secondary">
              <span className="text-[white]">Add to cart</span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
