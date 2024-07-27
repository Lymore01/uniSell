import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const colors = ["Black", "White", "Red", "Blue", "Green", "yellow", "others"];
const sizes = [38, 40, 42, 44, 46, "XL", "XXL", "XM", "LG"];

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploads, setUploads] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("Black");
  const [selectedSize, setSelectedSize] = useState<number>(42);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploads(URL.createObjectURL(file));
    }
  };

  return (
    <section className="p-6 flex flex-col gap-5 relative h-screen">
      <nav className="flex flex-row justify-between">
        <Link to="/shop/admin">
          <IoIosArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-semibold mx-auto">Add Product</h1>
        <span className="flex space-x-2">
          <CiMenuKebab size={24} />
        </span>
      </nav>

      <main>
        <section className="p-2 w-full h-auto">
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
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[grey]/20 placeholder-gray-400"
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
              className="outline-none px-2 w-full bg-[transparent] h-[120px] border border-[grey]/20 placeholder-gray-400"
              placeholder="Description..."
            ></textarea>
          </div>
          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label htmlFor="price" className="text-sm md:text-base">
              Product Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[grey]/20 placeholder-gray-400"
              placeholder="10"
            />
          </div>
          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label htmlFor="quantity" className="text-sm md:text-base">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[grey]/20 placeholder-gray-400"
              placeholder="3"
            />
          </div>
          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label className="text-sm md:text-base">Color</label>
            <div className="flex gap-2 flex-wrap border border-[grey]/20 py-4 px-2">
              {colors.map((color) => (
                <label key={color} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4 w-full flex flex-col gap-[5px] ">
            <label className="text-sm md:text-base">Size</label>
            <div className="flex gap-2 flex-wrap border border-[grey]/20 py-4 px-2">
              {sizes.map((size) => (
                <label key={size} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={(e) => setSelectedSize(Number(e.target.value))}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="size-36 rounded-[10px] mb-[20px] sm:mb-0">
              {!selectedFile && (
                <img
                  src="https://images.pexels.com/photos/18664914/pexels-photo-18664914/free-photo-of-a-woman-with-a-large-hat-on-her-head.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Default"
                  className="w-full h-full object-cover rounded-[10px] shadow-md"
                />
              )}
              {selectedFile && (
                <img
                  src={uploads || ""}
                  alt="Selected"
                  className="w-full h-full object-cover rounded-[10px] shadow-md"
                />
              )}
            </div>
            <button
              type="submit"
              className="text-black font-bold py-2 px-4 rounded cursor-pointer border border-slate-300 hidden flex-row gap-[20px] bg-green-500 sm:block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-center"
              >
                <path d="M11 15h2V9h3l-4-5-4 5h3z"></path>
                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
              </svg>
              <span className="text-white">Upload</span>
            </button>
            <label htmlFor="file" className="mb-4">
              <input
                type="file"
                id="file"
                name="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="text-[black] font-bold py-2 px-4 rounded cursor-pointer border border-slate-300 bg-primary text-center">
                Choose an image
              </div>
            </label>
          </div>
          <hr className="mt-6 mb-6" />
          <div className="flex justify-end items-end mt-4">
            <div className="flex justify-between items-center">
              <div
                className={`flex py-4 px-6 cursor-pointer rounded-lg text-base items-center bg-primary`}
              >
                <span className="font-semibold text-[black]">Add</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default AddProduct;
