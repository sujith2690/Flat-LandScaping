// import React from 'react'
// import Header from '../components/Header'
// import SidebarLeft from '../components/SidebarLeft'
// import SidebarRight from '../components/SidebarRight'
// import ContentPlace from '../components/ContentPlace'

// const Home = () => {
//     return (
//         <div className=''>
//             <Header />
//             <section className='flex px-16 justify-between gap-2  pt-5'>
//                 <SidebarLeft />
//                 <ContentPlace />
//                 <SidebarRight />
//             </section>
//         </div>
//     )
// }

// export default Home


import React from 'react'
import Header from '../components/Header'
import SidebarLeft from '../components/SidebarLeft'
import SidebarRight from '../components/SidebarRight'
import ContentPlace from '../components/ContentPlace'

const Home = () => {
    return (
        <div className="">
            <Header />
            <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 justify-between gap-4 pt-5">
                <SidebarLeft />
                <ContentPlace />
                <SidebarRight />
            </section>
        </div>
    )
}

export default Home
