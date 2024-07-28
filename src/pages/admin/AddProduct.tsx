import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { categories, inputFieldsData } from "../../utils/constants";
import InputField from "../../components/ui/InputField";

const colors = ["Black", "White", "Red", "Blue", "Green", "yellow", "others"];

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploads, setUploads] = useState<string | null>(null);

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
          {inputFieldsData.map((field) => {
            if (field.type === "textarea") {
              return (
                <div
                  key={field.prodName}
                  className="mt-4 w-full flex flex-col gap-[5px]"
                >
                  <label
                    htmlFor={field.prodName}
                    className="text-sm md:text-base"
                  >
                    {field.label}
                  </label>
                  <textarea
                    id={field.prodName}
                    name={field.prodName}
                    className="outline-none px-2 w-full bg-[transparent] h-[120px] border border-[grey]/20 placeholder-gray-400"
                    placeholder={field.placeholder}
                  ></textarea>
                </div>
              );
            }
            return (
              <InputField
                key={field.prodName}
                prodName={field.prodName}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
              />
            );
          })}

          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label htmlFor="category" className="text-sm md:text-base">
              Product category
            </label>
            <select className="bg-[transparent] outline-none h-[60px] border border-[grey]/20">
              {categories.map(({ category }) => (
                <option
                  value="volvo"
                  key={category}
                  className="bg-secondary text-sm"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 w-full flex flex-col gap-[5px]">
            <label className="text-sm md:text-base">Color</label>
            <select className="bg-[transparent] outline-none h-[60px] border border-[grey]/20">
              {colors.map((color, index) => (
                <option
                  value="volvo"
                  key={index}
                  className="bg-secondary text-sm"
                >
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <div className="size-36 rounded-[10px] mb-[20px] sm:mb-0">
              {!selectedFile && (
                <img
                  src="https://i.roamcdn.net/hz/pi/listing-thumb-543w/ed437e242b0253c5d16e7ecff9d35924/-/horizon-files-prod/pi/picture/qj4jep9z/40f037f11239df5f3f2aab7388e3e4e95b2777ce.jpg"
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
          {/* button */}
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
