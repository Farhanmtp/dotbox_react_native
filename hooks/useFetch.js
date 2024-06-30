import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          auth: {
            username: 'web_admin',
            password: '4fQX kS37 JuIq oA8w z8Kz EFQ3'
          }
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
