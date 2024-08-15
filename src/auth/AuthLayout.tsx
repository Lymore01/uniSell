import { Link } from "react-router-dom";

const AuthLayout = ({
  children,
  
}: {
  children: React.ReactNode;

}) => {
  return (
    <>
      <main className="w-full h-screen flex items-center justify-center bg-[url(https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
        <div className="w-[350px] h-auto p-4 flex flex-col gap-6 bg-primary rounded-xl shadow-md">
          <div className="flex items-start justify-start w-[240px]">
            <Link to={"/shop"}>
              <div className="w-full mx-auto h-auto flex-start">
                <img
                  src="src\assets\uniSell-logo-black.png"
                  alt="cryptic logo"
                  className="w-[50%]"
                />
              </div>
            </Link>
          </div>
          {/* <h1 className="text-[black] font-semibold text-xl px-2">{title}</h1> */}

          {children}
        </div>
      </main>
      {/* <footer>hello</footer> */}
    </>
  );
};

export default AuthLayout;
