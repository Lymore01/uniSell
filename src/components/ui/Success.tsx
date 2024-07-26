import { Link } from "react-router-dom";

const Success = () => {
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
    <main className="space-y-4 text-center h-auto">
      <div className="items-center justify-center flex w-full">
        <img
          src="https://cdn4.iconfinder.com/data/icons/generic-interaction/143/yes-tick-success-done-complete-check-allow-512.png"
          alt="unisell logo"
          className="size-36"
        />
      </div>
      <h1 className="text-3xl font-bold">
        Thank You!
      </h1>
      <p className="font-light">
        Your order has been taken and is being attended to
      </p>
      <div className="mt-2 uppercase font-base text-lg cursor-pointer">
        <Link to={"/shop/order-details"}>Check order details</Link>
      </div>
    </main>
    <footer className="w-full items-center flex justify-center">
      <span>success code: 200</span>
    </footer>
  </section>
  )
}

export default Success