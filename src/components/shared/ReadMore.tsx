import React, { useState } from "react";

const ReadMore = ({ children }: { children: React.ReactNode }) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const handleReadMore = () => {
    setReadMore(true);
  };

  return (
    <div>
      <p
        className={`${
          readMore === true ? "line-clamp-none" : "line-clamp-3"
        } md:line-clamp-none text-[grey] text-sm`}
      >
        {children}
      </p>
      {readMore === true ? (
        <span
          onClick={() => {
            setReadMore(false);
          }}
          className="text-sm capitalize text-[green]/80 font-semibold"
        >
          Read less
        </span>
      ) : (
        <span
          onClick={handleReadMore}
          className="text-sm capitalize text-[green]/80 font-semibold"
        >
          Read more
        </span>
      )}
    </div>
  );
};

export default ReadMore;
