import React from "react";
import flat from ".././assets/image/flat.jpg";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";


const ContentPlace = () => {
    const navigate = useNavigate();
    // Create an array of 42 items (floors)
    const bars = Array.from({ length: 42 });
    const handleRoute = (floorNumber) => {
        navigate(`/floor/${floorNumber}`);
    };
    return (
        <div className="w-full rounded overflow-hidden relative">
            {/* Image */}
            <div className="w-full">
                <img
                    src={flat}
                    alt="flat"
                    className="w-full h-full object-contain rounded"
                />
            </div>
            <div>
                {bars.map((_, i) => {
                    const floorNumber = 42 - i;
                    if (floorNumber === 1) return null;

                    const groupIndex = Math.floor((42 - floorNumber) / 10);
                    const rotation = -7 + groupIndex * 1.25;

                    return (
                        <div key={i}>
                            <div
                                data-tooltip-id={`tooltipLeft-${i}`}
                                data-tooltip-content={`Floor ${floorNumber}`}
                                className="absolute left-88   w-12 h-2 bg-transparent hover:bg-yellow-500 cursor-pointer"
                                style={{
                                    top: `${i * 8 + 97}px`,
                                    transform: `rotate(${rotation}deg)`,
                                }}
                                onClick={() => handleRoute(floorNumber)}
                            >
                                {/* Tooltip */}
                            </div>
                            <Tooltip
                                id={`tooltipLeft-${i}`}
                                place="left"
                                className=" !bg-amber-500 !text-white !rounded-lg !px-2 !py-1"
                            />
                        </div>
                    );
                })}

            </div>
            <div className="">
                {bars.map((_, i) => {
                    const floorNumber = 42 - i;
                    if (floorNumber === 1) return null;

                    const groupIndex = Math.floor((42 - floorNumber) / 10);
                    const rotation = -7 + groupIndex * 1.25;

                    return (
                        <div key={i}>
                            <div
                                data-tooltip-id={`tooltip-${i}`}
                                data-tooltip-content={`Floor ${floorNumber}`}
                                className="absolute right-88 w-12 h-2 bg-transparent hover:bg-yellow-500 cursor-pointer"
                                style={{
                                    top: `${i * 8 + 90}px`,
                                    transform: `rotate(${rotation}deg)`,
                                }}
                                onClick={() => handleRoute(floorNumber)}
                            >
                            </div>
                            {/* Tooltip */}
                            <Tooltip
                                id={`tooltip-${i}`}
                                place="right"
                                className=" !bg-amber-500 !text-white !rounded-lg !px-2 !py-1"
                            />
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default ContentPlace;
