import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <section className="p-6 flex flex-col gap-5 relative h-max-screen">
      <nav className="flex flex-row justify-between">
        <Link to={"/shop/admin"}>
          <IoIosArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-semibold mx-auto">Add Product</h1>
        <span className="flex space-x-2">
          <CiMenuKebab size={24} />
        </span>
      </nav>

      <main>
        <section className="p-2 w-full border border-[grey] rounded-lg h-auto">
          <h1 className="font-semibold capitalize">General info</h1>
          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label htmlFor="name" className="text-sm md:text-base">
              Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[grey]/20  placeholder:text-[gray]/60"
              placeholder="Nike shoes"
            />
          </div>
          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label htmlFor="description" className="text-sm md:text-base">
              Product Description
            </label>
            <textarea
              name="description"
              id="description"
              className="outline-none px-2 w-full bg-[transparent] h-[120px] border border-[grey]/20 placeholder:text-[gray]/60"
              placeholder="description..."
            ></textarea>
          </div>
        </section>
      </main>
    </section>
  );
};

export default AddProduct;
