import React from 'react'
import Error404Img from '../assets/images/Error404.svg'
import { useRouteError } from 'react-router-dom'

const Error404 = () => {


    const err = useRouteError();

  return (
    <div className='flex-center flex-col gap-10 h-screen w-screen bg-PrimaryDark'>
      <p className='text-Primary text-4xl font-bold'>{err.status}</p>
      <p className='text-Primary text-4xl'>{err.error.message}</p>
    </div>
  )
}

export default Error404
