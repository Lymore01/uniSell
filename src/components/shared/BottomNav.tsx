import { IoSearchOutline } from "react-icons/io5";
import { bottomNavItems } from "../../utils/constants";
import { FaToggleOn } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="bg-current w-full h-auto flex items-center p-2 rounded-lg">
      <div className="flex justify-between items-center w-full">
        {bottomNavItems.map(({ id, icon, title, active, href }) => (
          <div
            key={id}
            className={`p-2 rounded-lg flex flex-col gap-2 items-center justify-center size-fit ${active && 'bg-secondary'}`}
            onClick={()=>{
              window.location.href = href
            }}
          >
            <div>{icon}</div>
            <h1 className="capitalize font-semibold hidden">{title}</h1>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] inset-0 p-2 hidden">
        <div className="bg-[white] rounded-lg p-2 space-y-6">
          <div className="w-full p-4 rounded-lg bg-[white] h-auto justify-between flex items-center shadow-md">
            <input
              type="text"
              placeholder="search..."
              className="w-full outline-none placeholder:text-sm"
            />
            <IoSearchOutline size={24} />
          </div>
          <div className="bg-[white]">
            <div className="flex justify-between">
              <h1 className="text-[grey] text-sm">Advanced</h1>
              < FaToggleOn size={24}/>
            </div>
            <div>
              advanced
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
