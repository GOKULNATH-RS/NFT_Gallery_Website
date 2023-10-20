import React from 'react'
import EyeIcon from '../assets/icons/iconEye'

const NftCards = ({imgUrl,token,tokenId,views,price,collection,collectionLogoUrl}) => {
  return (
    <div className='h-[330px] w-[250px]  rounded-[12px] p-1 shadow-primary bg-Secondary hover:shadow-tertiary hover:scale-[1.005] border-[1px] border-Primary border-opacity-[0.05] duration-200' >
      <div className='h-[70%] w-full'>
        <img  className="h-full w-full rounded-[10px]" src={imgUrl} alt={tokenId} />
      </div>
      <div className='h-[30%] w-full p-2 flex flex-col justify-between'>
        <div  className='flex justify-between'>
            <p className='font-bold text-md'>#{tokenId}</p>
            <p className='flex items-center text-xs gap-[2px]'><EyeIcon color={"white"}/>{views}</p>
        </div>
        <p className='text-lg'>{price} {token}</p>
        <p className="text-xs font-bold flex gap-1 items-center"><img className='h-[15px] w-max rounded-full' src={collectionLogoUrl} alt={tokenId}/>{collection}</p>
      </div>
    </div>
  )
}

export default NftCards
