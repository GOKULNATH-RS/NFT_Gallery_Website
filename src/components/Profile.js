import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {


    const {name} = useParams();
  return (
    <div className='section'>
      {name}
    </div>
  )
}

export default Profile
