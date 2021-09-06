import React, { useState, useEffect } from 'react'
import Bannet_top from '../../components/banner-top'
import BgImg from "../../assets/images/products/1.jpg"
import Breadcrumb from '../../components/breadcrumb'
import Heading_Top from '../../components/heading-top'
import ScssStyle from "./products.module.scss"
import ProductsList from '../../api/products'
import { Link } from 'react-router-dom'
import App_download from "../../components/app-download"

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

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [clickReletedProd, setClickReletedProd] = useState(ProductsList.filter((item) => item.categoryId === 1))
    const [seleted, setSeleted] = useState(1)


    const onClick = (clickId) => {
        let fiterItems = ProductsList.filter((item) => item.categoryId === clickId)
        setClickReletedProd(fiterItems)
        setSeleted(clickId)
    }


    return (
        <section>

            <Bannet_top bgImg={BgImg} title="Get BDT 10 lacs of Term Insurance Coverage for as low as BDT 367 per year" />

            <div className="container">

                <div className="pt-4 py-lg-5">
                    <Breadcrumb bread1="Products" bread2="" bread3="" />
                </div>

                {/* Heading Top start */}
                <div className="pt-3 py-lg-5">
                    <Heading_Top
                        title="Our Products"
                        description="As a part of the Digitization strategy of insurance sector, EasyLife is the first ever online based insurance platform in Bangladesh which allows customers to purchase attractive policies such as Savings or Term plans of their choice by annually or monthly premium."
                        mainclass="d-lg-flex align-items-lg-center"
                        titClass="mb-3 mb-lg-0 d-inline-block col-lg-6 text-lg-end"
                        descClass="ms-lg-3"
                    />
                </div>
                {/* Heading Top end */}

                <div className="row pb-5 py-md-5">
                    <div className="col-12 col-md-5 col-lg-3 mb-4 mb-lg-0">
                        <div className={ScssStyle.card}>
                            {Plan_button && Plan_button.length > 0 && Plan_button.map((item, index) => (
                                <div key={index} className={`${seleted === item.id && ScssStyle.clickTitlePrent} ${ScssStyle.titlePrent}`}>
                                    <h3 onClick={() => onClick(item.id)} className={ScssStyle.title}>{item.nav}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-md-7 col-lg-9 ps-md-3 ps-lg-5">
                        <div style={{ height: "900px", overflow: "auto" }} className="row">
                            {clickReletedProd && clickReletedProd.length > 0 && clickReletedProd.map((item, index) => (
                                <div key={index} className="col-12 col-lg-6  mb-4">
                                    <div className={`overflow-hidden ${ScssStyle.cards}`}>
                                        <div className="overflow-hidden">
                                            <img className={`w-100 ${ScssStyle.image}`} src={item.picture} alt="" />
                                        </div>
                                        <div className={ScssStyle.cardBody}>
                                            <h3 className="mb-4 text-center text-color-blue">{item.title}</h3>
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
                                            <div className="d-flex justify-content-around mb-3">
                                                <Link to={`/policy/${item.id}`} className=" d-block">
                                                    <button className={ScssStyle.button}>{item.butoton1}</button>
                                                </Link>
                                                <Link to="" className=" d-block">
                                                    <button className={ScssStyle.button}>{item.butoton2}</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <App_download />
        </section >
    )
}

export default Products