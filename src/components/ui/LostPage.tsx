import { Link } from "react-router-dom";

const LostPage = () => {
  return (
    <section className="w-full h-screen bg-secondary flex p-4 justify-between flex-col">
      <nav>
        <img
          src="src\assets\uniSell-logo-white.png"
          alt="unisell logo"
          className="size-16"
          onClick={() => {
            window.location.href = "/shop";
          }}
        />
      </nav>
      <main className="space-y-4 text-center h-auto py-6">
        <div className="items-center justify-center flex w-full">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/grimacing-face-emoji-11210776-8973710.png?f=webp"
            alt="unisell logo"
            className="size-36"
          />
        </div>
        <h1 className="text-3xl font-bold">
          Opps! You have found the lost world!
        </h1>
        <p className="font-light">
          Shop is just a click away. Lets go back and continue our regular life
        </p>
        <div className="mt-2 uppercase font-base text-lg cursor-pointer">
          <Link to={"/shop"}>Go to shop</Link>
        </div>
      </main>
      <footer className="w-full items-center flex justify-center">
        <span>Error code: 404</span>
      </footer>
    </section>
  );
};

export default LostPage;
