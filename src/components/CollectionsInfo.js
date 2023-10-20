import React from 'react'
import { useParams } from 'react-router-dom'
import { NFTcollections ,data} from '../common/MockData';
import { Link } from 'react-router-dom';
import NftCards from './NftCards';


const CollectionsInfo = () => {
  
  const {cid} = useParams();

  const Collections = NFTcollections.filter((detail)=>{
    return detail.cid == cid;
  })

  const {collectionBannerUrl , collectionLogoUrl , name ,chain , collectionjoined,category , items } = Collections[0];



  const NftData = data.filter((detail)=>{
    return detail.collection.toLowerCase().includes(name.toLowerCase());
  })

  console.log(NftData);

  
  return (
    <div className='bg-PrimaryDark text-Primary min-h-screen'>


      <nav className='h-20 px-8  w-full Header  flex justify-between items-center sticky top-0 z-10'>
        <Link to="/collections" className='text-white' >Back</Link>  
        <button><img className="h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-center border-2 border-emerald-500" src="https://i.pinimg.com/564x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg" alt='profile'/></button>
      </nav>


      <div className='h-[40vh] w-full overflow-hidden flex flex-col justify-center'>
        <img src={collectionBannerUrl} alt={name}/>
      </div>


      <div className='flex items-center gap-20'>
        <img className='h-40 bg-black rounded-lg relative top-[-50px] left-10' src={collectionLogoUrl} alt={Collections[0].name}/>
        <h1 className='text-4xl lg:text-5xl font-bold text-center'>{name}</h1>
      </div>
      <div className='flex w-full justify-around'>

        <div className='flex gap-3 items-center'>
          <div className='font-bold text-xl'>Joined</div>
          <div>{collectionjoined}</div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='font-bold text-xl'>Items</div>
          <div>{items}</div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='font-bold text-xl'>Chain</div>
          <div>{chain}</div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='font-bold text-xl'>Category</div>
          <div>{category}</div>
        </div>
      </div>

      <div className='w-full p-10 flex flex-col gap-5'>
        <p className='font-bold text-4xl'>NFTs</p>
        <div className='flex flex-wrap gap-4 justify-center'>
          {
            NftData.map((item) =>{
              return(
                  <Link 
                    key={item.id}
                    to={`/nfts/${item.id}`}
                  >
                    <NftCards key={item.id} {...item}/>
                  </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CollectionsInfo
