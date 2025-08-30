import React from 'react'

const FloorPath = () => {
   
    return (
        <div className="rounded-md w-full sm:w-[300px] lg:w-[450px] shadow-md flex items-center flex-col bg-white">
            <div className='w-full flex justify-center items-center bg-gray-200 py-8 rounded-t-md'>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>Tower Features</button>
            </div>
            <div className=' h-full w-full'>
                {
                    towerFeatures.map((item, i) => (
                        <div key={i} className="flex items-center  gap-2 cursor-pointer p-2">
                            {item.icons && <p className="text-yellow-500 p-2 rounded-lg"> {item.icons} </p>}
                            <p className="text-sm font-semibold">{item.name ? item.name : ''}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default FloorPath