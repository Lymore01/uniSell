import { IoSearchOutline } from "react-icons/io5";
import { bottomNavItems } from "../../utils/constants";
import { FaToggleOn } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

const BottomNav = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className="bg-current w-full h-auto flex items-center p-2 rounded-lg">
      <div className="flex justify-between items-center w-full">
        {bottomNavItems.map(({ id, icon, title, active, href }) => (
          <div
            key={id}
            className={`p-2 rounded-lg flex flex-col gap-2 items-center justify-center size-fit ${
              active && "bg-secondary"
            }`}
            onClick={() => {
              window.location.href = href;
            }}
          >
            <div>{icon}</div>
            <h1 className="capitalize font-semibold hidden">{title}</h1>
          </div>
        ))}
      </div>
      {/* search */}
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] inset-0 p-2 hidden">
        <div className="bg-secondary rounded-lg p-2 space-y-6">
          <div className="w-full py-4 bg-secondary h-auto justify-between flex items-center shadow-md p-4 border border-[grey]">
            <input
              type="text"
              placeholder="search..."
              className="w-full outline-none placeholder:text-sm bg-[transparent]"
            />
            <IoSearchOutline size={24} />
          </div>
          <div className="space-y-4 bg-[transparent]">
            <div className="flex justify-between">
              <h1 className="text-[white] text-sm ">Advanced</h1>
              <FaToggleOn size={24} />
            </div>
            <div className="space-y-2">
              <h1 className="text-[grey] text-sm">Filter by budget</h1>
              <div className="flex space-x-4 overflow-x-scroll">
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>0-$20</span>
                </div>
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>20-$40</span>
                </div>
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>40-$60</span>
                </div>
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>$60+</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-[grey] text-sm">Filter by seller</h1>
              <div className="flex space-x-4 overflow-x-scroll">
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>Mso</span>
                </div>
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>Maggy</span>
                </div>
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>Lymore</span>
                </div>
                <div className="flex py-2 px-3 cursor-pointer bg-transparent border border-primary text-sm items-center">
                  <span>Janjez</span>
                </div>
              </div>
            </div>
            <div className={`flex py-4 px-6 cursor-pointer text-base items-center justify-center ${ theme === "dark" ? "bg-primary text-[black]" : "bg-secondary text-[white]" }`}>
                <span className="font-semibold">Search</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

// TODO: Add search functionality
