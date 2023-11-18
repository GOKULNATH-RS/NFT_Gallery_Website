import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/";
import NftCards from "./NftCards";
import Loading from "./Loading";

const Saved = () => {
  const [SaveNFTs, setSaveNFTs] = useState([]);
  const SavedNFTs = useSelector((state) => state.saved.items);
  const [isLoading, setIsLoading] = useState(true);

  const SavedsNFTs = async () => {
    const res = await fetch("http://localhost:5000/api/saved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: "test@gmail.com",
      }),
    });

    const data = await res.json();

    setSaveNFTs(data.items);
    setIsLoading(false);
  };

  useEffect(() => {
    SavedsNFTs();
  }, []);

  return (
    <div className="section flex flex-col gap-8">
      <h1 className="text-4xl font-bold ">My Collections</h1>
      <div className="flex flex-wrap gap-4">
        {isLoading ? (
          <Loading />
        ) : SaveNFTs.length === 0 ? (
          <h2 className="text-2xl ">No Saved Items</h2>
        ) : (
          SaveNFTs.map((item) => {
            return <NftCards key={item._id} {...item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Saved;
