import React, { useEffect, useState } from "react";
//import { useSelector } from "react-redux/";
import NftCards from "./NftCards";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { clearSaved } from "../redux/SavedSlice";

const Saved = () => {
  const [SaveNFTs, setSaveNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const SavedsNFTs = async () => {
    const userEmail = localStorage.getItem("userEmail");
    const res = await fetch("http://localhost:5000/api/saved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: { userEmail },
      }),
    });

    const data = await res.json();

    setSaveNFTs(data.items);
    setIsLoading(false);
  };

  const handleClearSaved = async () => {
    setIsLoading(true);
    console.log("clear");
    const res = await fetch("http://localhost:5000/api/saved/clear", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: "test@gmail.com",
      }),
    });

    const data = await res.json();
    setSaveNFTs(data.items);
    await SavedsNFTs();
    await dispatch(clearSaved());
    setIsLoading(false);
  };

  useEffect(() => {
    SavedsNFTs();
  }, []);

  return (
    <div className="section flex flex-col gap-8">
      <div className="flex gap-4 items-baseline">
        <h1 className="text-4xl font-bold ">My Collections</h1>
        <button
          onClick={() => handleClearSaved()}
          className="border-[1px] flex-center text-sm border-Primary border-opacity-[0.15] h-7 max-sm:h-10 w-max px-5 p-2 rounded-full hover:border-Primary hover:border-opacity-[0.45] active:border-opacity-90"
        >
          Clear
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {isLoading ? (
          <Loading />
        ) : SaveNFTs.length === 0 ? (
          <h2 className="text-2xl ">No Saved Items</h2>
        ) : (
          SaveNFTs.reverse().map((item, i) => {
            return <NftCards key={i} {...item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Saved;
