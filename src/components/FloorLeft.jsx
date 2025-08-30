import React from 'react'
import { useParams } from "react-router-dom";

const FloorLeft = ({ unitNo }) => {
    const { id } = useParams();
    console.log(id, '---------- const { id } = useParams();')
    return (
        <div className="rounded-md h-[400px] w-[250px] shadow-md flex items-center flex-col bg-white gap-2">
            <div className='w-full flex justify-center items-center bg-gray-200 py-8 rounded-t-md'>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>Floor No: {id}</button>
            </div>
            <div className=' h-full w-full grid place-items-center gap-2 '>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>
                    {unitNo == 1 ? <span className='text-black font-bold'>Unit No: 1</span>:<span>Unit No: 1</span>}
                </button>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>
                    {unitNo == 2 ? <span className='text-black font-bold'>Unit No: 2</span>:<span>Unit No: 2</span>}
                </button>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>
                    {unitNo == 3 ? <span className='text-black font-bold'>Unit No: 3</span>:<span>Unit No: 3</span>}
                </button>
                <button className='bg-yellow-500 px-5 py-2 rounded text-white font-bold'>
                    {unitNo == 4 ? <span className='text-black font-bold'>Unit No: 4</span>:<span>Unit No: 4</span>}
                </button>
            </div>
        </div>
    )
}

export default FloorLeft