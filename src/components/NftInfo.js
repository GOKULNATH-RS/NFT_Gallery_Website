/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IconEye from "../assets/icons/iconEye";
import NftCards from "./NftCards";
import useOnline from "../Hooks/useOnline";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import { addToSaved } from "../redux/SavedSlice";
import IconBookmark from "../assets/icons/iconBookmark";
import Loading from "./Loading";

const NftInfo = () => {
  const { _id } = useParams();
  const isOnline = useOnline();
  const [isLoading, setIsLoading] = useState(true);
  const [Collections, setCollections] = useState([]);
  const [NftDetails, setNftDetails] = useState([]);

  const SavedItems = useSelector((state) => state.saved.items);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/nft/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setNftDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERROR WHILE FETCHING" || err.message);
      });
  }, [_id]);

  try {
    useEffect(() => {
      fetch(`${process.env.REACT_APP_SERVER_URL}/api/nft`)
        .then((res) => res.json())
        .then((data) => {
          setCollections(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("ERROR WHILE FETCHING" || err.message);
        });
    }, [NftDetails]);
  } catch (error) {}

  if (!isOnline) {
    return <Offline />;
  }

  let CurrentUser = "GOKULNATH";

  const NftData = Collections.filter((nft) => {
    return (
      nft.collectionName === NftDetails.collectionName &&
      nft._id !== NftDetails._id
    );
  });

  const {
    tokenID,
    imgUrl,
    price,
    token,
    views,
    collectionName,
    collectionLogoUrl,
  } = NftDetails;

  const userEmail = localStorage.getItem("userEmail");
  const handleAddToSaved = (item) => async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: userEmail,
        nft: item,
      }),
    });

    const status = await res.json();

    if (res.status === 200) {
      dispatch(addToSaved(item));
      console.log("Added to Saved");
    }
  };

  return (
    <div className="bg-PrimaryDark w-full min-h-screen">
      <nav className="h-20 px-8 Header flex justify-between items-center sticky top-0 z-10">
        <Link to="/" className="text-white">
          Back
        </Link>
        <div className="flex gap-2 items-center">
          {isLoggedIn ? (
            <>
              <Link
                to="/saved"
                className="flex w-max h-8 relative justify-center items-center"
              >
                <IconBookmark fill={SavedItems.length} />
                <span
                  className={`h-3 lg:h-4 w-3 lg:w-4 ${
                    !SavedItems.length ? "text-blue-400" : "text-PrimaryDark"
                  }   duration-100 rounded-[100%] p-[2px]  text-[12px]  flex justify-center items-center absolute lg:top-[7px] top-[9px] font-bold`}
                >
                  {SavedItems.length}
                </span>
              </Link>
              <Link to={`/profile/${CurrentUser}`}>
                <img
                  className={`h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-center border-2 ${
                    isOnline ? "border-emerald-500" : "border-red-600"
                  }`}
                  src="https://i.pinimg.com/564x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg"
                  alt="profile"
                />
              </Link>
            </>
          ) : (
            <Link to="/login" className="text-white">
              Login
            </Link>
          )}
        </div>
      </nav>

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex max-lg:flex-col p-10">
            <div className="p-2 flex-1 ">
              <img
                className="w-full h-full rounded-xl"
                src={imgUrl}
                alt={tokenID}
              />
            </div>

            {/*Right Section */}
            <div className="flex-1 flex flex-col gap-6 p-10 text-4xl">
              <h1 className="text-white font-bold">#{tokenID}</h1>

              <div className="flex gap-4 items-center">
                <div className="h-14 w-14 rounded-full overflow-hidden flex-center ">
                  <img
                    src={collectionLogoUrl}
                    className="w-full h-full bg-black"
                    alt={collectionName}
                  />
                </div>
                <p className="text-xl text-Primary">{collectionName}</p>
              </div>

              <div className="text-Primary">
                <p className="text-xs opacity-70 ">Current Price</p>
                <p className="text-4xl font-bold">
                  {price} {token}
                </p>
                <p className="text-sm opacity-70 ">
                  $ {(price * 1607.14).toFixed(2)}
                </p>
                <p className="text-sm opacity-70">
                  ₹ {(price * 133592.18).toFixed(2)}
                </p>
              </div>

              <div className="flex gap-1 items-center text-sm  text-Primary">
                <IconEye color={"white"} />
                <p>{views}</p>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to={`/collections/${collectionName}`}
                  className="Border h-14 py-4 flex-1 text-Primary text-xl rounded-xl bg-HeaderColor flex-center"
                >
                  See Collection
                </Link>
                <button
                  className="Border h-14 py-4 w-full flex-1 text-Primary text-xl rounded-xl bg-HeaderColor active:bg-[#080d2e] active:border-opacity-[0.6]"
                  onClick={handleAddToSaved(NftDetails)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="text-Primary w-full p-10 flex flex-col gap-5">
            <p className="font-bold text-4xl">More from Collection</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {NftData.map((item) => {
                return (
                  <Link key={item._id} to={`/nfts/${item._id}`}>
                    <NftCards key={item.id} {...item} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftInfo;
