import React, { useState, useEffect } from 'react'
import BgImg from "../../assets/images/about/About_us.jpg"
import ScssStyle from "./about.module.scss"
import Awards from './awards'
import Media from './media'
import Our_mission from './our-mission'
import Who_we_are from './who-we-are'
import Why_join_us from './why-join-us'
import App_download from '../../components/app-download'
import Bannet_top from '../../components/banner-top'
import {goToSection} from "./scroll"
import {goToSection2} from "./scroll"
import {goToSection3} from "./scroll"
import {goToSection4} from "./scroll"
import {goToSection5} from "./scroll"


const ButtonList = [
    {
        id: 1,
        nav: "Who we ,are",
        pageId: "who_we_are",
       sc:goToSection
    },
    {
        id: 2,
        nav: "Our Mission",
        pageId: "our_mission",
        sc:goToSection2
    },
    {
        id: 3,
        nav: "Awards",
        pageId: "awards", 
        sc:goToSection3

    },
    {
        id: 4,
        nav: "Career",
        pageId: "career",
        sc:goToSection4

    },
    {
        id: 5,
        nav: "Media",
        pageId: "media",
        sc:goToSection5

    },
]





const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    const [seleted, setSeleted] = useState(1)


    const clickHandler = (clickId) => {
        setSeleted(clickId)
 
        
    }

    return (
        <section className="">
            <Bannet_top bgImg={BgImg} title="Get BDT 10 lacs of Term Insurance Coverage for as low as BDT 367 per year" />

            <div className="container pb-4 pb-lg-5">
                <div className={`${ScssStyle.buttonPrent}`}>
                    {ButtonList && ButtonList.length > 0 && ButtonList.map((item, index) => (
                        <a key={index} onClick={() => clickHandler(item.id), item.sc} href={`#${item.pageId}`}> <button className={`${seleted === item.id && ScssStyle.active} ${ScssStyle.button}`}>{item.nav}</button></a>
                    ))}
                </div>
            </div>
            
            <Who_we_are id={ButtonList[0].pageId} />
            <Our_mission id={ButtonList[1].pageId} />
            <Awards id={ButtonList[2].pageId} />
            <Why_join_us id={ButtonList[3].pageId} />
            <Media id={ButtonList[4].pageId} />
            <App_download />
        </section>
    )
}

export default About
