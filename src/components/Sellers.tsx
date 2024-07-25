import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const Sellers = ({
  shopLogo,
  shopName,
  shopDescription,
}: {
  shopLogo: string;
  shopName: string;
  shopDescription: string;
}) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`flex flex-col items-center gap-3 ${theme === "light" ? "bg-secondary": "bg-primary "}  w-[150px] min-w-[150px] h-[200px] rounded-lg p-4 shadow-md text-[white]`}
    onClick={()=>{
      window.location.href = "/shop/seller/1"
    }}
    >
      <div className="w-16 h-16 bg-[white] rounded-full flex items-center justify-center">
        <img
          src={shopLogo} // Placeholder for shop logo
          alt="Shop Logo"
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <span className="text-center font-semibold text-sm">{shopName}</span>
      <p className="text-center text-xs">{shopDescription}</p>
    </div>
  );
};

export default Sellers;
