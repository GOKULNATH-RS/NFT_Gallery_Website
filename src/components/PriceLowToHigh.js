
const PriceLowToHigh = (props) => {

    function sortPriceLowToHigh(){
        const PriceLowToHighNFTs = props.NFTs.price.filter((a,b) => {
            
            return(
                a.price - b.price
            );
        });

        props.onSort(PriceLowToHighNFTs);
    }

  return (
    <button onClick={sortPriceLowToHigh} className='border-[1px] border-Primary border-opacity-[0.15] h-15 w-max px-6 p-2 rounded-full hover:border-Primary hover:border-opacity-[0.45]'>
      <p className="text-sm">Price : Low to High</p>
    </button>
  )
}

export default PriceLowToHigh
