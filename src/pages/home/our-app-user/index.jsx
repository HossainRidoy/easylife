import React from 'react'
import Health from "../../../assets/icons/health.png"
import Offer from "../../../assets/icons/offer.png"
import Crown from "../../../assets/icons/the-crown.png"
import Arrow_right from "../../../assets/icons/arrow-right.svg"
import { Link } from 'react-router-dom'
import ScssStyle from "./ourAppUser.module.scss"
import CircleImg from '../../../components/circleImg'

import CImg_1 from "../../../assets/images/circle_img/1.jpg"
import CImg_2 from "../../../assets/images/circle_img/2.jpg"
import CImg_3 from "../../../assets/images/circle_img/3.jpg"
import Heading_Top from '../../../components/heading-top'


const arrowIcons = (color = "#000") => {
    return (
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={color} d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
    )
}

const HealtButton = [
    {
        imgIcon: Health,
        title: "Health Care",
        offerCount: 50,
        arrow: arrowIcons('#1a237e'),
        url:"/digital_offers",
        className: [ScssStyle.card, ScssStyle.card1, ScssStyle.title, ScssStyle.arrowIcon]
    },
    {
        imgIcon: Offer,
        title: "Entertainment",
        offerCount: 50,
        arrow: arrowIcons('#f71304'),
        url:"/digital_offers",
        className: [ScssStyle.card, ScssStyle.card2, ScssStyle.title2, ScssStyle.arrowIcon2]
    },
    {
        imgIcon: Crown,
        title: "Life Style",
        offerCount: 50,
        arrow: arrowIcons('#f59321'),
        url:"/digital_offers",
        className: [ScssStyle.card, ScssStyle.card3, ScssStyle.title3, ScssStyle.arrowIcon3]
    },
]


const OurAppUser = () => {

    return (
        <section className="pb-5 py-lg-5 overflow-hidden">
            <div className="container">

                <div className="row flex-wrap">
                    <div className="col-12 col-lg-4">
                        <div className="mb-5">
                            {/* Heading Top start */}
                            <Heading_Top
                                title="Enjoy Digital Loyalty Offers For Our App User"
                                description="A value added service for Easylife App users to avail exciting discount offers in different health care, entertainment & lifestyle brands."
                                mainclass=""
                                titClass="mb-3"
                                descClass="" />
                                
                            {/* Heading Top end */}

                        </div>
                        {HealtButton && HealtButton.length > 0 && HealtButton.map((item, index) => (

                            <Link key={index} to={item.url} className={`mb-4 d-flex flex-row justify-content-between align-items-center p-3 text-dark text-decoration-none ${item.className[1]} ${item.className[0]}`}>
                                <div className="d-flex flex-row align-items-center">
                                    <div  className="">
                                        <img className="img-fluid" src={item.imgIcon} alt="" />
                                    </div>
                                    <div className="ms-5">
                                        <h2 className={`mb-1 ${item.className[2]}`}>{item.title}</h2>
                                        <h3 className={item.className[2]}>{item.offerCount}+ Offer</h3>
                                    </div>
                                </div>
                                <div className="right d-flex justify-content-end">
                                    <div style={{ width: '15px' }}>{item.arrow}</div>
                                </div>
                            </Link>

                        ))}
                    </div>
                    <div className="col-12 col-lg-8 d-none d-lg-block">
                        <CircleImg img1={CImg_1} img2={CImg_2} img3={CImg_3} />
                    </div>
                </div>
                {/* button */}

                <div className="text-center mt-4">
                    <a href="https://play.google.com/store/apps/details?id=com.sslwireless.easylife" target="_blank"><button className="black-outline-btn">Get The App</button></a>
                </div>

            </div>

        </section>
    )
}

export default OurAppUser
