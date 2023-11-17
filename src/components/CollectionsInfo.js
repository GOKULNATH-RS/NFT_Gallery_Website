import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NftCards from "./NftCards";
import Loading from "./Loading";

const CollectionsInfo = () => {
  const [ThisCollection, setThisCollection] = useState({});
  const [Collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/collection/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setThisCollection(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error.message || "Server Error");
    }
  }, []);

  const {
    collectionBannerUrl,
    collectionLogoUrl,
    name,
    chain,
    collectionjoined,
    category,
    items,
  } = ThisCollection;

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/nft`)
        .then((res) => res.json())
        .then((data) => {
          setCollections(data);
        });
    } catch (error) {
      console.log(error.message || "Server Error");
    }
  }, []);

  let NftData = [];

  try {
    NftData = Collections.filter((detail) => {
      return detail.collectionName.includes(name);
    });
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div className="bg-PrimaryDark text-Primary min-h-screen w-full">
      <nav className="h-20 px-8  w-full Header  flex justify-between items-center sticky top-0 z-10">
        <Link to="/collections" className="text-white">
          Back
        </Link>
        <button>
          <img
            className="h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-center border-2 border-emerald-500"
            src="https://i.pinimg.com/564x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg"
            alt="profile"
          />
        </button>
      </nav>

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="h-[40vh] max-sm:h-[20vh] w-full overflow-hidden flex flex-col justify-center">
            <img src={collectionBannerUrl} alt={name} />
          </div>

          <div className="flex max-sm:flex-col items-center gap-20 max-sm:gap-5">
            <img
              className="h-40 bg-black rounded-lg relative top-[-50px] left-10 max-sm:left-0"
              src={collectionLogoUrl}
              alt={name}
            />
            <h1 className="text-4xl lg:text-5xl font-bold text-center">
              {name}
            </h1>
          </div>
          <div className="flex w-full max-sm:flex-col justify-around max-sm:justify-center max-sm:px-20 max-sm:py-5">
            {[
              {
                title: "Joined",
                value: collectionjoined,
              },
              {
                title: "Items",
                value: items,
              },
              {
                title: "Chain",
                value: chain,
              },
              {
                title: "Category",
                value: category,
              },
            ].map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex gap-3 items-center max-sm:py-5"
                >
                  <div className="font-bold text-xl">{item.title}</div>
                  <div>{item.value}</div>
                </div>
              );
            })}
          </div>

          <div className="w-full p-10 flex flex-col gap-5">
            <p className="font-bold text-4xl">NFTs</p>
            {
              <div className="flex flex-wrap gap-4 justify-center">
                {NftData.map((item) => {
                  return (
                    <Link key={item._id} to={`/nfts/${item._id}`}>
                      <NftCards key={item.id} {...item} />
                    </Link>
                  );
                })}
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsInfo;
