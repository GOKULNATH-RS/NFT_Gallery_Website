import React from 'react'
import { useParams } from 'react-router-dom'
import { NFTcollections } from '../common/MockData';
const CollectionsInfo = () => {
  
  const {cid} = useParams();

  const Collections = NFTcollections.filter((detail)=>{
    return detail.cid == cid;
  })

  console.log('Collections :>> ', Collections);

  return (
    <div>
      <img src={Collections[0].collectionBannerUrl} alt={Collections[0].name}/>
    </div>
  )
}

export default CollectionsInfo
