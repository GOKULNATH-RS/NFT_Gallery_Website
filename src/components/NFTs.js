import React, { useEffect, useState } from "react";
// import { data } from "../common/MockData";
import NftCards from "./NftCards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../Hooks/useOnline";
import Offline from "./Offline";
import MostViewedNFTs from "./MostViewedNFTs";
import PriceLowToHigh from "./PriceLowToHigh";
import { useDispatch } from "react-redux";
import { addToSaved } from "../redux/SavedSlice";

const NFTs = () => {
  const [SearchText, setSearchText] = useState("");
  const [NftData, setNftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [FilteredNFTs, setFilteredNFTs] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/api/nft")
      .then((res) => res.json())
      .then((data) => {
        setNftData(data);
        setFilteredNFTs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR WHILE FETCHING" || err.message);
      });
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return <Offline />;
  }

  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  function FilterNFTs() {
    const FilterNFTdata = NftData.filter((nft) => {
      return nft.tokenID.toString().includes(SearchText.toString());
    });
    setFilteredNFTs(FilterNFTdata);
  }

  function filterMostViewedNFTs(MostViewedNFTs) {
    setFilteredNFTs(MostViewedNFTs);
  }
  function sortPriceLowToHigh(PriceLowToHighNFTs) {
    setFilteredNFTs(PriceLowToHighNFTs);
  }

  return (
    <section className="p-10 px-20 max-sm:px-12 min-h-[80vh] w-full">
      <div className="flex flex-col gap-8 lg:gap-10 ">
        <div className="flex justify-between items-center max-sm:flex-col gap-5">
          <h2 className="font-bold lg:text-5xl text-4xl">Discover </h2>
          <div className="flex gap-3">
            <input
              type="text"
              className="p-2 px-3 lg:p-2 lg:px-4 bg-transparent border-[1px] border-Primary border-opacity-[0.1] rounded-lg"
              placeholder="Search NFTs"
              onChange={handleSearchInput}
              name="Search NFT"
            ></input>
            <button
              onClick={FilterNFTs}
              className="p-1 px-3 rounded-lg border-[1px] border-transparent hover:border-Primary hover:border-opacity-[0.15]"
            >
              Search
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-wrap gap-3">
          <MostViewedNFTs onFilter={filterMostViewedNFTs} NFTs={FilteredNFTs} />
          <PriceLowToHigh onSort={sortPriceLowToHigh} NFTs={FilteredNFTs} />
        </div>

        <div className="flex gap-4 flex-wrap w-full justify-center">
          {isLoading ? (
            <Shimmer />
          ) : (
            FilteredNFTs.map((item) => {
              return (
                <Link to={`nfts/${item._id}`} key={item._id}>
                  <NftCards key={item._id} {...item} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default NFTs;
