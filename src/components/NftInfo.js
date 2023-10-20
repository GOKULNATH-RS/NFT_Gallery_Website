import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../common/MockData';
import { Link } from 'react-router-dom';
import IconEye from '../assets/icons/iconEye';
import NftCards from './NftCards';

const NftInfo = () => {

    const {Nid} = useParams();

    const FilteredNFTData = data.filter((detail)=>{
      return detail.id == Nid;
    })

    
    const {tokenId , imgUrl , price , token , views, collection , collectionLogoUrl , cid , id} = FilteredNFTData[0];
    const NftData = data.filter((detail)=>{
    return detail.collection.toLowerCase().includes(collection.toLowerCase()) &&( detail.id != id);
  })

  return (
    <div className='bg-PrimaryDark w-full min-h-screen'>

        <nav className='h-20 px-8 Header flex justify-between items-center sticky top-0 z-10'>
          <Link to="/" className='text-white' >Back</Link>  
          <button><img className="h-10 lg:h-12 w-10 lg:w-12 rounded-full bg-center border-2 border-emerald-500" src="https://i.pinimg.com/564x/d7/f3/2e/d7f32e6c302205c45f082e6de141ef00.jpg" alt='profile'/></button>
        </nav>

      <div className='flex max-lg:flex-col p-10'>
            <div className='p-2 flex-1 '>
              <img className='w-full h-full rounded-xl' src={imgUrl} alt={tokenId} />
            </div>
          
            {/*Right Section */}
            <div className='flex-1 flex flex-col gap-6 p-10 text-4xl'>
              <h1 className= 'text-white font-bold'>#{tokenId}</h1>

              <div className='flex gap-4 items-center'>
                <div className='h-14 w-14 rounded-full overflow-hidden flex-center '>
                  <img src={collectionLogoUrl} className='w-full h-full bg-black' alt={collection}/>
                </div>
                <p className='text-xl text-Primary'>{collection}</p>
              </div>

              <div className='text-Primary'>
                <p className='text-xs opacity-70 '>Current Price</p>
                <p className='text-4xl font-bold'>{price} {token}</p>
                <p className='text-sm opacity-70 '>$ {(price*1607.14).toFixed(2)}</p>
                <p className='text-sm opacity-70'>₹ {(price*133592.18).toFixed(2)}</p>
              </div>

              <div className='flex gap-1 items-center text-sm  text-Primary'>
                <IconEye color={'white'}/>
                <p >{views}</p>
              </div>

              <div className='flex flex-col gap-4'>
                
                  <Link 
                    to={`/collections/${cid}`}
                     className='Border h-14 py-4 flex-1 text-Primary text-xl rounded-xl bg-HeaderColor flex-center'
                  >
                    See Collection
                  </Link>
                  <button
                  className='Border h-14 py-4 w-full flex-1 text-Primary text-xl rounded-xl bg-HeaderColor'
                  >
                    Save
                  </button>
                
              </div>
            </div>
        </div>

        <div className='text-Primary w-full p-10 flex flex-col gap-5'>
          <p className='font-bold text-4xl'>More from Collection</p>
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

export default NftInfo
