import React from 'react'
import Header from '../components/Header'
import FloorPath from '../components/FloorPath'

const Floor = () => {
    return (
        <div className="">
            <Header />
            <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 justify-between gap-4 pt-5">
                <FloorPath />
                {/* <ContentPlace /> */}
                <SidebarRight />
            </section>
        </div>
    )
}

export default Floor