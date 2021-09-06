import React, { useState, useEffect } from 'react'
import Bannet_top from '../../components/banner-top'
import BgImg from "../../assets/images/products/1.jpg"
import Breadcrumb from '../../components/breadcrumb'
import Heading_Top from '../../components/heading-top'
import ScssStyle from "./faq.module.scss"
import ProductsList from '../../api/products'
import App_download from "../../components/app-download"
import FaqList from "../../api/faq"



const Plan_button = [
    {
        id: 1,
        nav: "Product FAQ"
    },
    {
        id: 2,
        nav: "Offers FAQ"
    },
    {
        id: 3,
        nav: "General FAQ"
    }
]

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [clickReletedProd, setClickReletedProd] = useState(FaqList.filter((item) => item.categoryId === 1))
    const [seleted, setSeleted] = useState(1)


    const onClick = (clickId) => {
        let fiterItems = FaqList.filter((item) => item.categoryId === clickId)
        setClickReletedProd(fiterItems)
        setSeleted(clickId)
    }


    return (
        <section>
            <Bannet_top bgImg={BgImg} title="Get BDT 10 lacs of Term Insurance Coverage for as low as BDT 367 per year" />
          
            <div className="container">
                <div className="pt-5 pb-4">
                    <Breadcrumb bread1="FAQ" bread2="" bread3="" />
                </div>

                {/* Heading Top start */}
                <div className="pb-sm-5">
                    <Heading_Top
                        title="How Can We Help You?"
                        description="
                        Manage your account easily and securely"
                        mainclass="d-lg-flex align-items-lg-center"
                        titClass="mb-3 mb-lg-0 d-inline-block col-lg-6 text-lg-end"
                        descClass="ms-lg-3"
                    />
                </div>
                {/* Heading Top end */}

                <div className="row mt-lg-5">
                    <div className="col-12 col-md-3">

                        <div className={ScssStyle.card}>
                            {Plan_button && Plan_button.length > 0 && Plan_button.map((item, index) => (
                                <div key={index} className={`${seleted === item.id && ScssStyle.clickTitlePrent} ${ScssStyle.titlePrent}`}>
                                    <h3 onClick={() => onClick(item.id)} className={ScssStyle.title}>{item.nav}</h3>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="col-12 col-md-9  ps-md-4">

                        <div className="row">
                            {clickReletedProd && clickReletedProd.length > 0 && clickReletedProd.map((item, index) => (
                                <div key={index} className={ScssStyle.cards}>
                                    <h3 className={`mb-4 ${ScssStyle.title}`}>{item.title}</h3>
                                    <p className="mb-1">{item.describtion}</p>
                                   
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

export default Faq