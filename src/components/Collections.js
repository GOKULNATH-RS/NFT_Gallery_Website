import React, { useState } from "react";
import CollectionsCard from "./CollectionsCard";
import { Link } from "react-router-dom";
import Offline from "./Offline";
import useOnline from "../Hooks/useOnline";
import { useEffect } from "react";
import Loading from "./Loading";

const Collections = () => {
  const [SearchText, setSearchText] = useState("");
  const [FilteredCollections, setFilteredCollections] = useState([]);
  const [CollectionsData, setCollectionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isOnline = useOnline();

  useEffect(() => {
    fetch("http://localhost:5000/api/collection")
      .then((res) => res.json())
      .then((data) => {
        setFilteredCollections(data);
        setCollectionsData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR WHILE FETCHING COLLECTIONS" || err.message);
      });
  }, []);

  if (!isOnline) {
    return <Offline />;
  }

  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  function FilterCollections() {
    const FilterCollections = CollectionsData.filter((collection) => {
      return collection.name.toLowerCase().includes(SearchText.toLowerCase());
    });

    setFilteredCollections(FilterCollections);
  }

  return (
    <section className="section">
      <div className="flex flex-col gap-8 lg:gap-10 ">
        <div className="flex justify-between items-center  max-sm:flex-col gap-5">
          <h2 className="font-bold lg:text-5xl text-4xl">Collections </h2>
          <div className="flex gap-3">
            <input
              type="text"
              className="p-1 px-3 lg:p-2 lg:px-4 bg-transparent border-[1px] border-Primary border-opacity-[0.1] rounded-lg"
              placeholder="Search Collections"
              onChange={handleSearchInput}
              name="Search Collections"
            ></input>
            <button
              onClick={FilterCollections}
              className="p-2 px-3 rounded-lg border-[1px] border-transparent hover:border-Primary hover:border-opacity-[0.15]"
            >
              Search
            </button>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex gap-4 flex-wrap w-full justify-center">
            {FilteredCollections.map((item) => {
              return (
                <Link to={`/collections/${item._id}`} key={item._id}>
                  <CollectionsCard {...item} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
