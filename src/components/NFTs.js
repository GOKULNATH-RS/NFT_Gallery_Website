import React, { useState } from 'react'
import { data } from '../common/MockData'
import NftCards from './NftCards'
import { Link } from 'react-router-dom'

const NFTs = () => {

 const [SearchText , setSearchText] = useState("");
 const [FilteredNFTs,setFilteredNFTs] = useState(data);


  function handleSearchInput(e){
    setSearchText(e.target.value);
  }

  function FilterNFTs(){
    const FilterNFTdata = data.filter((nft) =>{
      return nft.tokenId.toString().includes(SearchText.toString());
    });
    setFilteredNFTs(FilterNFTdata);
  }
  

  return (
    <section className='p-10 px-20 min-h-[80vh] w-full'>
      
    <div className='flex flex-col gap-8 lg:gap-10 '>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold lg:text-5xl text-4xl'>Discover </h2>
        <div className='flex gap-3'>
          <input 
            type='text' 
            className='p-1 px-3 lg:p-2 lg:px-4 bg-transparent border-[1px] border-Primary border-opacity-[0.1] rounded-lg' 
            placeholder='Search NFTs'
            onChange={handleSearchInput}
            name='Search NFT'
          ></input>
          <button
           onClick={FilterNFTs}
           className='p-1 px-3 rounded-lg border-[1px] border-transparent hover:border-Primary hover:border-opacity-[0.15]'>Search</button>
        </div>
      </div>

      <div className='flex gap-4 flex-wrap w-full justify-center' >
        {FilteredNFTs.map((item)=>{
          return (
            <Link to={`nfts/${item.id}`} key={item.id}>
              <NftCards key={item.id} {...item} />
            </Link>
        )})}
      </div>
    </div>
    </section>
  )
}

export default NFTs
