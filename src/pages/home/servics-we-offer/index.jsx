import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ScssStyle from "./services.module.scss";
import PlanItems from "../../../api/we_offer"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "../../../assets/icons/moon.svg"
import Heading_Top from '../../../components/heading-top';

const Plan_button = [
    {
        id: 1,
        nav: "Term Life Insurance"
    },
    {
        id: 2,
        nav: "Savings Plan"
    },
    {
        id: 3,
        nav: "Women's Savings Plan"
    }
]

const Services_we_offer = () => {

    const [selectedId, setSelectedId] = useState(1)

    const [planItemsCard, setPlanItemsCard] = useState(PlanItems.filter((item) => item.categoryId === 1))

    const click_handler = (clickId) => {
        let fiterItem = PlanItems.filter((item) => item.categoryId === clickId)
        setPlanItemsCard(fiterItem)
        setSelectedId(clickId)
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="pb-5 py-lg-5 overflow-hidden">

            <div className="container">
                <div className="">
                    {/* Heading Top start */}
                    <Heading_Top
                        title="Services We Offer"
                        description="Easylife offers savings and security together in an affordable price for its valuable customers. Our solutions such as Savings, Term & Combo products are here to cover your risk."
                        mainclass="d-lg-flex align-items-lg-center"
                        titClass="mb-3 mb-lg-0 d-inline-block col-lg-6 text-lg-end"
                        descClass="ms-lg-3"
                    />
                    {/* Heading Top end */}

                </div>

                <div className="my-5 d-flex overflow-auto bg-light rounded-md-pill align-items-center justify-content-lg-around rounded-pill">

                    {Plan_button && Plan_button.length > 0 && Plan_button.map((item, index) => (
                            <span key={index} onClick={() => click_handler(item.id)} className={`col-4 ${ScssStyle.planButton} ${selectedId === item.id && ScssStyle.active}`}>{item.nav}</span>
                    ))}

                </div>

                <div className={`row ${ScssStyle.servicBgImg}`}>

                    <Slider {...settings}>
                        {planItemsCard && planItemsCard.length > 0 && planItemsCard.map((item, index) => (
                            <div key={index} className={`overflow-hidden ${ScssStyle.card}`}>
                                <div className="">
                                    <img className={`w-100 ${ScssStyle.image}`} src={item.picture} alt="" />
                                </div>
                                <div className={ScssStyle.cardBody}>
                                    <h2 className="mb-4 text-color-blue">{item.title}</h2>
                                    <p className="mb-4">{item.description}</p>
                                    <div className="d-flex justify-content-between align-items-center mb-4 font-size-18 ">
                                        <div>
                                            <p className="text-color-orange mb-3 font-weight-bold">Coverage</p>
                                            <p className="font-weight-semi-bold">BDT {item.coverage}</p>
                                        </div>
                                        <div>
                                            <p className="text-color-orange mb-3 font-weight-bold">Term</p>
                                            <p className="font-weight-semi-bold">{item.term} Years</p>
                                        </div>
                                        <div>
                                            <p className="text-color-orange mb-3 font-weight-bold">Premium</p>
                                            <p className="font-weight-semi-bold">BDT {item.preminum}</p>
                                        </div>
                                    </div>
                                    <Link to="/login" className="text-center d-block">
                                        <button className={ScssStyle.button}>{item.butoton}</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Services_we_offer
