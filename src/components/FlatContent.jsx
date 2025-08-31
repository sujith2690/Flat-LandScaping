import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import flat from '../assets/image/3bhk aprt top.jpg'
import { Tooltip } from "react-tooltip";

const FlatContent = ({setUnitName}) => {
    const navigate = useNavigate();
    const { id } = useParams(); // this will capture "4" from /floor/4
    console.log(id, '-----number')
    const handleRoute = (unitId) => {
        navigate(`/floor/${id}/unit${unitId}`);
    };
    const units = [
        {
            id: 1,
            name: "Balcony 7'0' x 5'0",
            style: {
                top: "15%",
                left: "20%",
                width: "9%",
                height: "12%",
            },
        },
        {
            id: 2,
            name: "Master Bed Room 11'0' x 15'0",
            style: {
                top: "28%",
                left: "19%",
                width: "12%",
                height: "30%",
            },
        },
        {
            id: 3,
            name: "M Toilet 5'0' x 8'0",
            style: {
                top: "58%",
                left: "21%",
                width: "6%",
                height: "17%",
            },
        },
        {
            id: 4,
            name: "Bedroom 1 11'0' x 13'0",
            style: {
                top: "24%",
                left: "31%",
                width: "12%",
                height: "27%",
            },
        },
        {
            id: 5,
            name: "Kitchen  8'5' x 11'2",
            style: {
                top: "58%",
                left: "33%",
                width: "10%",
                height: "25%",
            },
        },
        {
            id: 6,
            name: "Utility  3'6' x 5'6",
            style: {
                top: "70%",
                left: "29%",
                width: "4%",
                height: "12%",
            },
        },
        {
            id: 7,
            name: "Walk In  5'0' x 6'0",
            style: {
                top: "58%",
                left: "27%",
                width: "6%",
                height: "12%",
            },
        },
        {
            id: 8,
            name: "Toilet 4'6' x 8'0",
            style: {
                top: "34%",
                left: "43%",
                width: "6%",
                height: "17%",
            },
        },
        {
            id: 9,
            name: "Living Dining 21'0' x 14'3",
            style: {
                top: "29%",
                left: "49%",
                width: "23%",
                height: "29%",
            },
        },
        {
            id: 11,
            name: "Balcony 13'0' x 5'0",
            style: {
                top: "18%",
                left: "53%",
                width: "14%",
                height: "11%",
            },
        },

        {
            id: 12,
            name: "BedRoom - 2  11'0' x 14'0",
            style: {
                top: "34%",
                right: "16%",
                width: "12%",
                height: "28%",
            },
        },
        {
            id: 13,
            name: "Toilet  5'0' x 8'0",
            style: {
                top: "45%",
                right: "10%",
                width: "6%",
                height: "18%",
            },
        },
        {
            id: 14,
            name: "Ent-Flor  5'6' x 6'11",
            style: {
                top: "58%",
                right: "29%",
                width: "6%",
                height: "14%",
            },
        },
    ];

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Floor Plan Image */}
            <img
                src={flat}
                alt="Floor Plan"
                className="w-full h-auto object-contain rounded"
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
                        setUnitName(unit.name)
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
    )
}

export default FlatContent