import React, { useEffect } from 'react'
import HomeSlide from './home-slide'
import OurAppUser from './our-app-user'
import Protected_minutes from './protected-minutes'
import Services_we_offer from './servics-we-offer'
import App_download from "../../components/app-download"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HomeSlide />
            <Services_we_offer />
            <OurAppUser />
            <Protected_minutes />
            <App_download />
        </>
    )
}

export default Home
