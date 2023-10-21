
const MostViewedNFTs = (props) => {

    function filterMostViewedNFTs(){

        const MostViewedNFTs =  props.NFTs.filter((NFT) => 
             NFT.views > 5000
        )
        
        props.onFilter(MostViewedNFTs)
        
    }

  return (
    <button onClick={filterMostViewedNFTs} className='border-[1px] border-Primary border-opacity-[0.15] h-15 w-max px-6 p-2 rounded-full hover:border-Primary hover:border-opacity-[0.45]'>
      <p className="text-sm">Most Viewed</p>
    </button>
  )
}

export default MostViewedNFTs
