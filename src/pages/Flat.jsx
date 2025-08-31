import React, { useState } from 'react'
import FlatLeft from '../components/FlatLeft'
import FlatContent from '../components/FlatContent'
import FlatRight from '../components/FlatRight'
import Header from '../components/Header'

const Flat = () => {
    const [unitName, setUnitName] = useState()
    return (
        <div className="">
            <Header />
            <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 justify-between gap-4 pt-5">
                <FlatLeft unitName={unitName} />
                <FlatContent setUnitName={setUnitName} />
                <FlatRight unitName={unitName} />
            </section>
        </div >
    )
}

export default Flat