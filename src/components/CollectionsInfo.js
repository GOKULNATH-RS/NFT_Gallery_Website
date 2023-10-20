import React from 'react'
import { useParams } from 'react-router-dom'

const CollectionsInfo = () => {

    const {cid} = useParams();
  return (
    <div>
      {cid}
    </div>
  )
}

export default CollectionsInfo
