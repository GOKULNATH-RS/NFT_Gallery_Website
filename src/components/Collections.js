import React from 'react'
import { NFTcollections } from '../common/MockData'
import CollectionsCard from './CollectionsCard'
import { Link } from 'react-router-dom'

const Collections = () => {
  return (
    <section className='section'>
      
    <div className='flex flex-col gap-8 lg:gap-10 '>
      <h2 className='font-bold lg:text-5xl text-4xl'>Collections </h2>

      <div className='flex gap-4 flex-wrap w-full justify-center' >
        {
         NFTcollections.map((item) =>{
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
