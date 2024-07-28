export type ProductProps = {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
  onclick: () => void;
};

const Product = ({ image, title, category, price, onclick }: ProductProps) => {
  return (
    <div
      className="flex flex-col gap-3 bg-white w-[150px] h-full rounded-lg p-2 shadow-md"
      onClick={onclick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover object-center rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <span className="text-[grey] text-xs capitalize">{category}</span>
        <p className="capitalize font-semibold text-sm truncate">{title}</p>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[green]/80 text-base">${price}</h1>
          <span className="text-sm">in(3)</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
