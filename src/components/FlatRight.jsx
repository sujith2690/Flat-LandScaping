import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const FlatRight = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // 👈 Goes back one step in history
    };

    return (
        <div className="rounded-md w-[250px] shadow-md flex flex-col bg-white">
            {/* Header */}
            <div className="w-full flex justify-center items-center bg-gray-200 py-8 rounded-t-md">
                <button
                    className="bg-yellow-500 px-5 py-2 rounded text-white font-bold cursor-pointer"
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default FlatRight;
