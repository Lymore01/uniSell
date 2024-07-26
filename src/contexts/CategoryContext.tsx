import React, { createContext, useEffect, useState } from "react";
import { CategoryList } from "../components/shared/CategoryList";
import { categoryConfig } from "../utils/constants";

type CategoriesContextType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export const CategoriesContext = createContext<CategoriesContextType>([
  "clothes",
  () => {},
]);

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentCategory, setCurrentCategory] = useState("clothes");
  const [categoryData, setCategoryData] = useState<React.ReactNode>(<></>);

  useEffect(() => {
    const data = categoryConfig[currentCategory]?.map((item) => (
      <CategoryList title={item.title} icon={item.icon} href="" key={item.title} />
    ));
    setCategoryData(data);
  }, [currentCategory]);

  return (
    <CategoriesContext.Provider value={[currentCategory, setCurrentCategory, categoryData]}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoryProvider;
