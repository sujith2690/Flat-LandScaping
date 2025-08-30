// import React from "react";
// import { IoHomeOutline, IoImagesOutline } from "react-icons/io5";




// const Navbar = () => {
//     const content = [
//         {
//             icons: <IoHomeOutline size={24} />,
//             name: '',
//             route: '#'
//         },
//         {
//             name: "Project Highlights",
//             route: '#'
//         },
//         {
//             name: "Location",
//             route: '#'
//         },
//         {
//             name: "master Plan",
//             route: '#'
//         },
//         {
//             name: "Project Details",
//             route: '#'
//         },
//         {
//             name: "Amenities",
//             route: '#'
//         },
//         {
//             name: "Collaterals",
//             route: '#'
//         },
//         {
//             name: "Walkthrough",
//             route: '#'
//         },
//         {
//             icons: <IoImagesOutline size={24} />,
//             name: '',
//             route: '#'
//         },
//     ]
//     return (
//         <div className="fixed bottom-5 left-0 w-full p-5 text-center text-white  flex justify-center items-center">
//             <div className="w-5/6 bg-black/80 rounded-2xl p-5 flex justify-between shadow-md">

//                 {
//                     content.map((item, i) => (
//                         <>
//                             <div key={i} className="flex items-center justify-between">
//                                 {item.icons && <p className="bg-yellow-500"> {item.icons} </p>}
//                                 <p className="text-lg sm:text-xl">{item.name ? item.name : ''}</p>
//                             </div>
//                             {i !== content.length - 1 && <span className="px-3 text-white grid place-items-center">|</span>}
//                         </>
//                     ))
//                 }
//             </div>

//         </div >
//     );
// };

// export default Navbar;
