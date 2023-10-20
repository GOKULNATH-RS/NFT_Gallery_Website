import React from 'react'
import { data } from '../common/MockData'
import NftCards from './NftCards'
import { Link } from 'react-router-dom'

const NFTs = () => {
  return (
    <section className='p-10 px-20 min-h-[80vh] w-full'>
      
    <div className='flex flex-col gap-8 lg:gap-10 '>
      <h2 className='font-bold lg:text-5xl text-4xl'>Discover </h2>

      <div className='flex gap-4 flex-wrap w-full justify-center' >
        {data.map((item)=>{
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
