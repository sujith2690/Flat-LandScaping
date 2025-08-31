import React from 'react'
import { useParams } from 'react-router-dom';

const FlatLeft = ({ unitName }) => {
    const { id } = useParams();
    console.log(id, '---------- const { id } = useParams();')
    const floorData = ["Balcony 7'0' x 5'0", "Master Bed Room 11'0' x 15'0", "M Toilet 5'0' x 8'0", "Bedroom 1 11'0' x 13'0", "Kitchen  8'5' x 11'2", "Utility  3'6' x 5'6", "Walk In  5'0' x 6'0", "Toilet 4'6' x 8'0", "Living Dining 21'0' x 14'3", "Balcony 13'0' x 5'0", "BedRoom - 2  11'0' x 14'0", "Toilet  5'0' x 8'0", "Ent-Flor  5'6' x 6'11"]

    return (
        <div className="rounded-md h-[550px] w-[250px] shadow-md flex flex-col bg-white">
            {/* Header */}
            <div className="w-full flex justify-center items-center bg-gray-200 py-8 rounded-t-md">
                <button className="bg-yellow-500 px-5 py-2 rounded text-white font-bold">
                    Floor No: {id}
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="h-full w-full flex flex-col gap-2 overflow-y-auto p-2">
                <ul className="w-full">
                    {floorData.map((item, i) => (
                        
                        <li key={i} className={`text-center p-2 border-b ${unitName == item && "p-3 bg-amber-500 text-white "} `}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default FlatLeft