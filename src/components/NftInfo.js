import React from 'react'
import { useParams } from 'react-router-dom'

const NftInfo = () => {

    const {id} = useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default NftInfo
