import React from 'react'
import { data } from '../common/MockData'
import NftCards from './NftCards'

const NFTsDetails = () => {
  return (
    <section className='section'>

      <h2 className='font-bold lg:text-5xl text-4xl'>Discover </h2>

      <div className='flex gap-4 flex-wrap w-full' >
        {data.map((item)=>{
          return <NftCards key={item.id} {...item} />
        })}
        {
          // NFTcollections.map((item) =>{
          //   return (
          //     <CollectionsCard LogoUrl={item.collectionLogoUrl} name={item.name} {...item}/>
          //   )
          // })
        }
      </div>
    </section>
  )
}

export default NFTsDetails
