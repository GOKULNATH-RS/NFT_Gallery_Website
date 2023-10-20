import React from 'react'
import IconBookmark from '../assets/icons/iconBookmark.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className=' w-full shadow-secondary h-20 bg-[#090e34] bg-opacity-60 backdrop-blur-xl flex justify-between items-center gap-4 px-8 sticky top-0 z-50'>
      <div className='text-white'>
        Logo
      </div>
      <ul className='flex gap-5 lg:gap-8 max-sm:hidden'>
        {[{name:"NFTs",url:"/nfts"},{name:"Collections",url:'/collections'},{name:"About",url:'/about'},{name:"Contact",url:"/contact"}].map((item)=>{
          return <li key={item} className='font text-md lg:text-lg text-white cursor-pointer tracking-wider hover:text-blue-500'><Link to={item.url}>{item.name}</Link></li>
        }) 
      }
       
      </ul>
      <div className=' flex gap-2 items-center'>
          <button className='flex w-6 h-10 relative justify-center items-center'>
          <IconBookmark />
          <span className='h-3 lg:h-4 w-3 lg:w-4 bg-blue-700 duration-100 rounded-[100%] p-[2px] text-[10px] text-white flex justify-center items-center absolute top-1 lg:top-0 right-0 font-bold'>2</span>

          </button>
          <button><img className="h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-center border-2 border-emerald-500" src="https://i.pinimg.com/564x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg" alt='profile'/></button>
      </div>
    </nav>
  )
}

export default Header
