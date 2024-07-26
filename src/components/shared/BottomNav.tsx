import { bottomNavItems } from "../../utils/constants";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const BottomNav = () => {
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
            <div>{icon}</div>
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
