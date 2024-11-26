import React, {
  createContext,
  useContext,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

import axios from "axios";

const ResultContext = createContext();
const baseUrl = "https://google-api-unlimited.p.rapidapi.com/";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cars");

  // /videos, /search, /images

  async function getResults(type) {
    setIsLoading(true);

    const data = new FormData();
    data.append("query", searchTerm);

    const options = {
      method: "POST",
      url: "https://google-api-unlimited.p.rapidapi.com/search_image",
      headers: {
        "x-rapidapi-key": "735f7b1270msh6c586cab168a204p194541jsn4a8b43cfab9c",
        "x-rapidapi-host": "google-api-unlimited.p.rapidapi.com",
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      setResults(response.data)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getResults()
  }, [searchTerm])

  useEffect(() => {
    console.log(results)
  }, [results])
  
  return (
    <ResultContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
