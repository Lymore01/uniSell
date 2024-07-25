const Product = ({
  image,
  title,
  category,
  price,
  onclick

}: {
  image: string;
  title: string;
  category: string;
  price: number;
  onclick:()=>void;
}) => {
  return (
    <div className="flex flex-col gap-3 bg-white w-[150px] h-full rounded-lg p-2 shadow-md" onClick={onclick}>
    <img
      src={image}
      alt={title}
      className="w-full h-36 object-cover object-center rounded-lg"
    />
    <div className="flex flex-col gap-1">
      <span className="text-[grey] text-xs capitalize">{category}</span>
      <p className="capitalize font-semibold text-sm truncate">{title}</p>
      <h1 className="font-semibold text-[green]/80 text-base">${price}</h1>
    </div>
  </div>
  );
};

export default Product;