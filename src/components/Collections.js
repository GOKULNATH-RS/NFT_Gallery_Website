import React, { useState } from 'react'
import { NFTcollections } from '../common/MockData'
import CollectionsCard from './CollectionsCard'
import { Link } from 'react-router-dom'

const Collections = () => {

  const [SearchText,setSearchText] =useState("");
  const [FilteredCollections,setFilteredCollections] = useState(NFTcollections);

  function handleSearchInput(e){
      setSearchText(e.target.value);
  }

  function FilterCollections(){
    const FilterCollections = NFTcollections.filter((collection)=>{
      return collection.name.toLowerCase().includes(SearchText.toLowerCase());
    })

    setFilteredCollections(FilterCollections);
  }

  return (
    <section className='section'>
      
    <div className='flex flex-col gap-8 lg:gap-10 '>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold lg:text-5xl text-4xl'>Collections </h2>
        <div className='flex gap-3'>
          <input 
            type='text' 
            className='p-1 px-3 lg:p-2 lg:px-4 bg-transparent border-[1px] border-Primary border-opacity-[0.1] rounded-lg' 
            placeholder='Search Collections'
            onChange={handleSearchInput}
          ></input>
          <button
            onClick={FilterCollections}
           className='p-1 px-3 rounded-lg border-[1px] border-transparent hover:border-Primary hover:border-opacity-[0.15]'>Search</button>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap w-full justify-center' >
        {
         FilteredCollections.map((item) =>{
           return (
            <Link to={`/collections/${item.cid}`} key={item.cid}>
                <CollectionsCard LogoUrl={item.collectionLogoUrl} name={item.name} {...item}/>
            </Link>
           )
         })
        }
      </div>
    </div>
    </section>
  )
}

export default Collections
