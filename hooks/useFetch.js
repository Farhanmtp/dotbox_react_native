import { useState, useEffect } from "react";
import axios from "axios";

const wpUsername = 'web_admin';
const wpKey = '4fQX kS37 JuIq oA8w z8Kz EFQ3';

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
            username: wpUsername,
            password: wpKey
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
