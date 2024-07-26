export const CategoryList = ({
  title,
  icon,
  href
}: {
  title: string;
  icon: React.ReactNode;
  href:string
}) => {
  return (
    <div
    className={`inline-flex py-2 px-3 cursor-pointer rounded-lg active:bg-[black] active:text-[white] hover:bg-[black] hover:text-[white] bg-primary text-sm items-center`}

      onClick={()=>{
        window.location.href = href
      }}
    >
      <span className="mr-2">{icon}</span>
      <span>{title}</span>
    </div>
  );
};
