import React from 'react'
import { useSelector } from 'react-redux/'
import NftCards from './NftCards'

const Saved = () => {


    const SavedNFTs = useSelector((state) => state.saved.items)
    console.log(SavedNFTs)

  return (
    <div className='section flex flex-col gap-8'>
      <h1 className='text-4xl font-bold '>My Collections</h1>
      <div className='flex flex-wrap gap-4'>
        {
          SavedNFTs.map((item) => {
            return(
              <NftCards key={item.id} {...item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Saved
