import React, { useState } from "react";
import floor from "../assets/image/floor plan.jpg"; // update with correct path
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // make sure you import styles
import { useNavigate, useParams } from "react-router-dom";

const FloorPlan = ({ setUnitNo }) => {
    const navigate = useNavigate();
    const { id } = useParams(); // this will capture "4" from /floor/4
    const [isLoading, setIsLoading] = useState(true);
    console.log(id, '-----number')
    const handleRoute = (unitId) => {
        navigate(`/floor/${id}/unit${unitId}`);
    };
    const units = [
        {
            id: 1,
            name: "Unit 1",
            style: {
                top: "15%",
                left: "20px",
                width: "45%",
                height: "30%",
                clipPath: "polygon(12% 0, 100% 10%, 100% 100%, 0% 100%)",
            },
        },
        {
            id: 2,
            name: "Unit 2",
            style: {
                top: "15%",
                left: "50%",
                width: "45%",
                height: "30%",
                clipPath: "polygon(0% 10%, 100% 10%, 100% 100%, 0% 100%)",
            },
        },
        {
            id: 3,
            name: "Unit 3",
            style: {
                top: "60%",
                left: "8%",
                width: "40%",
                height: "30%",
                clipPath: "polygon(12% 0, 100% 10%, 100% 100%, 0% 100%)",
            },
        },
        {
            id: 4,
            name: "Unit 4",
            style: {
                top: "60%",
                left: "50%",
                width: "40%",
                height: "30%",
                clipPath: "polygon(0 10%, 96% 10%, 100% 100%,0% 100%)",
            },
        },
    ];

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Floor Plan Image */}
            {isLoading && (
                <div className="text-center h-full">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto mb-4"></div>
                    <p className="text-lg text-gray-700 font-medium">Loading, please wait...</p>
                </div>
            )}
            <img
                src={floor}
                alt="Floor Plan"
                className="w-full h-auto object-contain rounded"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
            />

            {/* Overlays */}
            {units.map((unit) => (
                <div
                    key={unit.id}
                    data-tooltip-id="floor-tooltip"
                    data-tooltip-content={unit.name}
                    className="absolute cursor-pointer hover:bg-yellow-500/60 transition-all"
                    style={unit.style}
                    onMouseEnter={() => {
                        setUnitNo(unit.id)
                    }}
                    onClick={() => handleRoute(unit.id)}
                />
            ))}

            {/* Tooltip - only once */}
            <Tooltip
                id="floor-tooltip"
                place="right"
                className="!bg-amber-500 !text-white !rounded-lg !px-2 !py-1"
            />
        </div>
    );
};

export default FloorPlan;
