import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";

const Categories = () => {
  return (
    <section className="p-6 flex flex-col gap-5 relative">
      <nav className="flex flex-row justify-between">
        <Link to={"/shop"}>
          <IoIosArrowBack size={24} />
        </Link>
        <h1 className="text-xl font-semibold mx-auto">Categories</h1>
        <span>
          <IoSearchOutline size={22} />
        </span>
      </nav>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <CategoryCard key={index} image={cat.image} category={cat.category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;

const CategoryCard = ({ image, category } : {
    image:string,
    category:string
}) => {
  return (
    <div className=" w-full h-[180px] bg-white drop-shadow-md p-2 flex flex-col">
      <img
        src={image}
        alt={category}
        className="object-center object-cover w-full h-2/3"
      />
      <span className="font-medium capitalize mt-2">{category}</span>
    </div>
  );
};
