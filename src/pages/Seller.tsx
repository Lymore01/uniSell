/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { sellerDetails } from "../utils/constants";
import NavLayout from "./NavLayout";
import { useContext, useEffect, useState } from "react";
import CategoryLayout from "../layout/CategoryLayout";
import { CategoriesContext } from "../contexts/CategoryContext";
import ReadMore from "../components/shared/ReadMore";

const Seller = () => {
  const [currentCategory, setCurrentCategory, categoryData] =
    useContext(CategoriesContext);
  const [path, setPath] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setPath(id);
  }, [id]);

  /**
   * add to cart
   * checkout
   * add product
   * add
   * clear fulfilled orders
  */

  useEffect(() => {
    const category = sellerDetails.filter((seller) => seller.id === id);
    setCurrentCategory(category[0].category);
  }, [path]);

  return (
    <NavLayout title="" heart={true}>
      {sellerDetails
        .filter((seller) => seller.id === path)
        .map((seller) => (
          <div
            className="flex flex-col gap-5 md:items-start md:justify-start"
            key={seller.id}
          >
            <div className="flex flex-col">
              <span className="text-[grey] text-xs capitalize font-semibold">
                Seller
              </span>
              <h1 className="text-3xl font-semibold capitalize">
                {seller.title}
              </h1>
            </div>

            <ReadMore>{seller.description}</ReadMore>

            <div className="flex space-x-4 overflow-x-scroll">
              <CategoryLayout
                category={seller.category}
                subCategories={categoryData}
              >
                <div className="flex-1 h-full">

                </div>
              </CategoryLayout>
            </div>
          </div>
        ))}
    </NavLayout>
  );
};

export default Seller;
