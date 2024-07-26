import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLayout = ({
  children,
  title,
  heart,
}: {
  children: React.ReactNode;
  title: string;
  heart: boolean;
}) => {
  return (
    <section className="p-6 flex flex-col gap-5 relative h-min-screen h-max-screen md:w-[80%] mx-auto">
      <nav>
        <nav className="flex flex-row justify-between">
          <Link to={"/shop"}>
            <IoIosArrowBack size={24} />
          </Link>
          <h1 className="text-xl font-semibold mx-auto">{title}</h1>
          <span className="flex space-x-2">
            <GoHeart size={24} className={`${heart === true ? "block" : "hidden"}`} />
            <CiMenuKebab size={24} />
          </span>
        </nav>
      </nav>
      <main className="">{children}</main>
    </section>
  );
};

export default NavLayout;
