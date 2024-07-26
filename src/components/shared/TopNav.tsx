/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeProvider";

const TopNav = ({ title }: { title: string }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <section className="w-full flex items-center justify-between flex-row p-2 rounded-lg text-secondary">
      <div className="flex flex-col">
        <p className="text-xs font-mono">12:45 pm,</p>
        <h1 className="font-semibold text-xl">{title} 🎉</h1>
      </div>
      <div className="flex space-x-6 items-end justify-end">
        <div className="hidden md:flex space-x-4">
          <span className="capitalize text-sm">shop</span>
          <span className="capitalize text-sm">categories</span>
          <span className="capitalize text-sm">cart</span>
          <span className="capitalize text-sm">search</span>
          <span className="capitalize text-sm">profile</span>
        </div>
        <div
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? (
            <MdDarkMode size={24} />
          ) : (
            <MdLightMode size={24} />
          )}
        </div>
      </div>
    </section>
  );
};

export default TopNav;

{
  /* <h1 className="font-semibold text-xl">Lets go! 🎉</h1> */
}
