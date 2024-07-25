import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [prod, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        setLoading(true);
        const results = await response.json();
        if (!results) {
          setError("Products not found");
          setLoading(false);
        }
        setData(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching products");
      }
    }
    fetchProducts();
  }, [url]);

  return { prod, loading, error };
};

export default useFetch;
