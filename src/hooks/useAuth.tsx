/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export interface ResponseData {
  message: string;
  accessToken: string;
  refreshToken: string;
}

const useAuth = (url: string, data: any) => {
  const [results, setResults] = useState<ResponseData>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //   const [error, setError] = useState<string>("")

  useEffect(() => {
    async function authFunction() {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          console.log("Error login in user");
          return;
        }

        const results = await response.json();
        if (results) {
          setLoading(false);
          setResults(results);
        } else {
          console.log("No results");
        }
      } catch (error) {
        // setError(error)
        setLoading(false);
        console.log(error);
      }
    }

    authFunction();
  }, [url, data]);
  return { results, loading };
};

export default useAuth;
