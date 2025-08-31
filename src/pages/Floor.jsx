import React, { useState } from 'react'
import Header from '../components/Header'
import FloorView from '../components/FloorView'
import FloorLeft from '../components/FloorLeft'
import FloorRight from '../components/FloorRight'

const Floor = () => {
    const [unitNo, setUnitNo] = useState()
    return (
        <div className="">
            <Header />
            <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 justify-between gap-4 pt-5">
                <FloorLeft unitNo={unitNo} />
                <FloorView setUnitNo={setUnitNo} />
                <FloorRight/>
            </section>
        </div >
    )
}

export default Floor