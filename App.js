import React from 'react'
import Navbar from './components/Navbar.js'
import travelData from './data.js'
import MainSection from './components/MainSection.js'

console.log(travelData)

export default function App() {
    const newTravelData = travelData.map(country => {
        return (
            <MainSection
                key={country.title}
                country={country}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            {newTravelData}

        </div>
    )
}