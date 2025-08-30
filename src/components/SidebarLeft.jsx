import React from 'react'
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { PiVideoConferenceLight } from "react-icons/pi";
import { TbDeviceCctv } from "react-icons/tb";
import { GiPowerGenerator } from "react-icons/gi";
import { PiFireExtinguisherDuotone } from "react-icons/pi";


const SidebarLeft = () => {
    const towerFeatures = [
        {
            icons: <TbDeviceLandlinePhone size={40} />,
            name: "Intercom Systems"
        },
        {
            icons: <PiVideoConferenceLight size={40} />,
            name: "Video Door Phone"
        },
        {
            icons: <TbDeviceCctv size={40} />,
            name: "CCTV Camera (Ground Floor Entrance Lobby)"
        },
        {
            icons: <GiPowerGenerator size={40} />,
            name: "Power Backup (Common Area)"
        },
        {
            icons: <PiFireExtinguisherDuotone size={40} />,
            name: "Fire Fighting Systems"
        },

    ]
    return (
        // <div className='rounded-md w-[450px] shadow-md flex items-center flex-col bg-white'>
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

export default SidebarLeft