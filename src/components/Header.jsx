import React, { useState } from "react";
import LeftLogo from "../assets/image/logo1.png";   // adjust path based on file location
import RightLogo from "../assets/image/logo2.png";
import { IoHomeOutline, IoImagesOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const content = [
        { icons: <IoHomeOutline size={22} />, name: "", route: "#" },
        { name: "Project Highlights", route: "#" },
        { name: "Location", route: "#" },
        { name: "Master Plan", route: "#" },
        { name: "Project Details", route: "#" },
        { name: "Amenities", route: "#" },
        { name: "Collaterals", route: "#" },
        { name: "Walkthrough", route: "#" },
        { icons: <IoImagesOutline size={22} />, name: "", route: "#" },
    ];

    return (
        <header className="w-full px-2 sm:px-8 py-3 shadow-md bg-white relative z-50">
            {/* Top header logos */}
            <div className="flex items-center justify-between">
                {/* Left Logo */}
                <div className="flex items-center space-x-2 p-2">
                    <img
                        src={LeftLogo}
                        alt="Left Logo"
                        className="h-10 sm:h-14 w-auto object-contain"
                    />
                </div>

                {/* Right Logo + Hamburger */}
                <div className="flex items-center gap-4 p-2">
                    <img
                        src={RightLogo}
                        alt="Right Logo"
                        className="h-10 sm:h-14 w-auto object-contain"
                    />
                    {/* Hamburger visible on mobile */}
                    <div className="lg:hidden  shadow-2xl rounded px-2 py-1">
                        <button
                            className="lg:hidden text-3xl text-black"
                            onClick={() => setIsOpen(true)}
                        >
                            <HiOutlineMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Navbar (bottom fixed) */}
            <div className="hidden lg:flex fixed bottom-2 left-0 w-full p-5 text-center text-white justify-center items-center">
                <div className=" bg-black rounded-2xl px-3 py-3 flex gap-2 shadow-md">
                    {
                        content.map((item, i) => (
                            <>
                                <div key={i} className="flex items-center justify-between cursor-pointer">
                                    {item.icons && <p className="bg-yellow-500 p-2 rounded-lg"> {item.icons} </p>}
                                    <p className="text-sm font-semibold">{item.name ? item.name : ''}</p>
                                </div>
                                {i !== content.length - 1 && <span className="px-3 text-white grid place-items-center">|</span>}
                            </>
                        ))
                    }
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden`}
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 text-3xl"
                    onClick={() => setIsOpen(false)}
                >
                    <HiOutlineX />
                </button>

                {/* Sidebar menu items */}
                <nav className="mt-12 flex flex-col gap-2">
                    {content.map((item, i) => (
                        <div key={i}>
                            <a
                                href={item.route}
                                className="flex items-center gap-3 py-3 hover:text-yellow-400"
                            >
                                {item.icons && <span>{item.icons}</span>}
                                {item.name}
                            </a>
                            {/* Add horizontal line except last item */}
                            {i !== content.length - 1 && <hr className="border-gray-600" />}
                        </div>
                    ))}
                </nav>

            </div>

            {/* Overlay when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 sm:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Header;
