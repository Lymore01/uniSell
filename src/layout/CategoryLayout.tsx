import React, { useContext } from "react";
import { IoFilter } from "react-icons/io5";
import { ThemeContext } from "../contexts/ThemeProvider";

const CategoryLayout = ({
  children,
  subCategories,
  category,
}: {
  children: React.ReactNode;
  subCategories: React.ReactNode;
  category: string;
}) => {
  const [theme] = useContext(ThemeContext);

  return (
    <main className="w-full h-auto flex flex-col gap-4 relative">
      <div
        className={`gap-4 flex flex-col sticky top-0 left-0 px-2 ${
          theme === "light" ? "bg-[white]" : "bg-secondary"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-base font-semibold capitalize">{category}</h1>
          <IoFilter />
        </div>
        <div
          className={`flex space-x-4 overflow-x-scroll  ${
            theme === "light" ? "text-[black]" : "text-[black]"
          } `}
        >
          <p className="flex py-2 px-3 cursor-pointer rounded-lg bg-[black] text-[white] text-sm items-center">
            <span>All</span>
          </p>
          {/*  */}
          {subCategories}
        </div>
      </div>
      {children}
    </main>
  );
};

export default CategoryLayout;
