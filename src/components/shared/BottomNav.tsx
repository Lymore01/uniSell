import useCart from "../../hooks/useCart";
import { bottomNavItems } from "../../utils/constants";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const BottomNav = () => {
  const { cart } = useCart();
  return (
    <div className="bg-current w-full flex h-auto md:hidden items-center p-2 rounded-lg ">
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
            {title === "Cart" ? (
              <div className="flex flex-row relative">
                {icon}
                {cart.length > 0 && (
                  <div className="rounded-full absolute top-[-5px] right-[-5px]">
                    <div className="rounded-full size-2 bg-[red]"></div>
                  </div>
                )}
              </div>
            ) : (
              <div>{icon}</div>
            )}
            <h1 className="capitalize font-semibold hidden">{title}</h1>
          </div>
        ))}
        <SignedOut>
          <CustomSignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {/* search */}
    </div>
  );
};

export default BottomNav;

// TODO: Add search functionality

const CustomSignInButton: React.FC = () => (
  <SignInButton mode="modal">
    <button className="flex py-4 px-6 cursor-pointer rounded-lg text-base items-center bg-primary">
      <span className="text-[black]">Sign In</span>
    </button>
  </SignInButton>
);
