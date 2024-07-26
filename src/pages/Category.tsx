/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./Layout";
import CategoryLayout from "../layout/CategoryLayout";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../contexts/CategoryContext";

const Category = () => {
  const [currentCategory, setCurrentCategory, categoryData] = useContext(CategoriesContext);

  const { id } = useParams();
  const [path, setPath] = useState("cat");

  useEffect(() => {
    if (!id) {
      setPath("clothes");
    }
    setCurrentCategory(id);

    setPath(id);
  }, [id, path]);


  return (
    <Layout title="Let's go">
      <CategoryLayout
        category={path}
        subCategories={
          categoryData
        }
      >
        <p>
          
        </p>
      </CategoryLayout>
    </Layout>
  );
};

export default Category;
