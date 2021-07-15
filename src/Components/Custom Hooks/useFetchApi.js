import { useState, useEffect } from "react";

export default function useFetchApi(url) {
  const [apiResults, setApiResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    const rawData = await fetch(url);
    const data = await rawData.json();
    setApiResults(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return {
    apiResults,
    isLoading,
  };
}
