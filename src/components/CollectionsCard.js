import React from "react";

const CollectionsCard = ({ collectionLogoUrl, name }) => {
  return (
    <div className="h-[250px] w-[250px] bg-black rounded-2xl overflow-hidden">
      <img
        className="h-full w-full hover:scale-105 duration-300"
        src={collectionLogoUrl}
        alt={name}
      />
      <div className=" w-full relative bottom-[80px] px-2 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0] bg-opacity-30 h-20 ">
        <p className="absolute bottom-3 font-bold">{name}</p>
      </div>
    </div>
  );
};

export default CollectionsCard;
