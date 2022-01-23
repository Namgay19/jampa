import { useCallback, useState } from "react";

const useCustomHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl + requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: requestConfig.body,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const data = await response.json();
      const authorization = response.headers.get("Authorization");
      setIsLoading(false);
      if (authorization !== null) {
        applyData(data, authorization);
      } else {
        applyData(data);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong!");
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useCustomHttp;
