import React from 'react'
import NftCards from './NftCards'
import {data} from '../common/MockData';

const Details = () => {
  return (
    <div className='flex flex-col gap-10 p-10 px-20 justify-center'>

      <h2 className='font-bold text-5xl'>Discover </h2>

      <div className='flex gap-4 flex-wrap w-full'>
        {data.map((item)=>{
          return <NftCards key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default Details
