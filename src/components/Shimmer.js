import React from 'react'

const Shimmer = () => {
  return (

    <>
        {
            [1,2,3,4,5,6,7,8,9,10].map((item) =>{
                return(
                    <div key={item} className='h-[330px] w-[250px]  rounded-[12px] p-1 shadow-primaryLight bg-Secondary hover:shadow-Secondary hover:scale-[1.005] border-[1px] border-Primary border-opacity-[0.05] duration-200' >
                        <div className='h-[230px] w-full  rounded-[12px]'>
                            <div  className="animate-pulse bg-PrimaryDark bg-opacity-60 h-full w-full rounded-[10px]" >{/*Image*/}</div>
                        </div>
                        <div className='h-[100px] w-full p-2 flex flex-col justify-between'>
                            <div  className='flex flex-col gap-2 justify-between py-2'>
                                <p className='animate-pulse font-bold text-md h-3 w-full  rounded-full bg-PrimaryDark bg-opacity-40'>{/*TokenId*/}</p>
                                <p className='animate-pulse font-bold text-md h-3 w-3/4  rounded-full bg-PrimaryDark bg-opacity-40'>{/*TokenId*/}</p>
                                <p className='animate-pulse font-bold text-md h-3 w-1/2  rounded-full bg-PrimaryDark bg-opacity-40'>{/*TokenId*/}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
    
    </>

  )
}

export default Shimmer
