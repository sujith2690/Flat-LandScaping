import React from 'react'

import { GrChapterAdd } from "react-icons/gr";
import { CgScreenShot } from "react-icons/cg";
import { FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";


const SidebarRight = () => {
    const towerFeatures = [
        {
            icons: <GrChapterAdd size={40} />,
            name: "Imported marble flooring in Living, Dining, and all bedrooms"
        },
        {
            icons: <CgScreenShot size={40} />,
            name: "Vitrified tiles in Kitchen and Bathrooms"
        },
        {
            icons: <FaKitchenSet size={40} />,
            name: "Modular kitchen design with quartz countertop; under-counter setup"
        },
        {
            icons: <TbAirConditioning size={40} />,
            name: "Air-conditioning in Living and Bedroom"
        },
    ]
    return (
        // <div className='rounded-md w-[450px] shadow-md flex items-center flex-col bg-white'>
        <div className=" hidden lg:flex rounded-md w-full sm:w-[300px] lg:w-[450px] shadow-md  items-center flex-col bg-white">
            <div className='w-full flex justify-center items-center bg-gray-200 py-8 rounded-t-md'>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>Unit Details</button>
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

export default SidebarRight