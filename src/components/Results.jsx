import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation(); //images, news, videos etc

  
  // HERE
  useEffect(() => {
    if (location.pathname === "/search") {
      getResults("g_search");
    } else if (location.pathname === "/images") {
      getResults("search_image")
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div className="md:w-2/5 w-full " key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm ">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map((image) => (
            <figure key={image.id} className="w-1/2 gap-2 p-4">
              <a
                target="_blank"
                className="sm:p-3 p-5 w-full"
                href={image.origin.website.url}
              >
                <img
                  className="w-full"
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                />
                <p className="w-36 break-words text-sm mt-2">
                  {image.origin.title}
                </p>
              </a>
            </figure>
          ))}
        </div>
      );
    case "/news":
      return "SEARCH";
    case "/videos":
      return "SEARCH";

    default:
      return "ERROR";
  }
};

export default Results;
