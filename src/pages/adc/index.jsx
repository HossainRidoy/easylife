import React, { useEffect, useState } from 'react'
import BannerImg from "../../assets/images/adc/adc.jpg"
import Breadcrumb from "../../components/breadcrumb"
import Heading_Top from "../../components/heading-top"
import ScssStyle from "./adc.module.scss"

import A_image from "../../assets/images/adc/robi/download (1).jpg"
import Upay from "../../assets/images/adc/upay/upay.jpg"
import Bkash from "../../assets/images/adc/bkash/bkash.jpg"
import Wallet from "../../assets/images/adc/okWellt/okWell.jpg"

import Offer_pic_1 from "../../assets/images/adc/robi/download.png"
import Offer_pic_2 from "../../assets/images/adc/robi/download (1).png"
import Offer_pic_3 from "../../assets/images/adc/robi/download (2).png"
import Offer_pic_4 from "../../assets/images/adc/robi/download (3).png"

import P_image from "../../assets/images/adc/robi/download (4).png"

import App_download from "../../components/app-download"



const buttons = [
    {
        id: 1,
        btnName: "Robi"
    },
    {
        id: 2,
        btnName: "Upay"
    },
    {
        id: 3,
        btnName: "Ok wallet"
    },
    {
        id: 4,
        btnName: "Bkash"
    },
]


const AdcItemList = [
    {
        id: 1,
        about: {
            picture: A_image,
            title: "About 1",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        monthOffer: [Offer_pic_1, Offer_pic_2, Offer_pic_3, Offer_pic_4,],
        policy: {
            picture: P_image,
            title: "Why Purchase Our Policy",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        y_video:`https://www.youtube.com/watch?v=377AQ0y6LPA`,
    },
    {
        id: 2,
        about: {
            picture: Upay,
            title: "About 2",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        monthOffer: [Offer_pic_1, Offer_pic_2, Offer_pic_3, Offer_pic_4,],
        policy: {
            picture: P_image,
            title: "Why Purchase Our Policy",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        y_video:`https://www.youtube.com/watch?v=377AQ0y6LPA`,
    },
    {
        id: 3,
        about: {
            picture: Wallet,
            title: "About 3",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        monthOffer: [Offer_pic_1, Offer_pic_2, Offer_pic_3, Offer_pic_4,],
        policy: {
            picture: P_image,
            title: "Why Purchase Our Policy",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        y_video:`https://www.youtube.com/watch?v=BBS7Md2SjEs`,
    },
    {
        id: 4,
        about: {
            picture: Bkash,
            title: "About 4",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        monthOffer: [Offer_pic_1, Offer_pic_2, Offer_pic_3, Offer_pic_4,],
        policy: {
            picture: P_image,
            title: "Why Purchase Our Policy",
            describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illo quibusdam labore voluptate exercitationem saepe? Odit, ipsa ad deleniti omnis a aut accusamus numquam deserunt necessitatibus, itaque dolores sapiente quasi?"
        },
        y_video: `https://www.youtube.com/watch?v=BBS7Md2SjEs`,
    },

]



const Adc = () => {


    const [priviwItem, setPriviwItem] = useState(AdcItemList.filter((item) => item.id === 1))

    const [seletButton, setSeletButton] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const clickButton = (clickId) => {
        let filterItem = AdcItemList.filter((item) => item.id === clickId)
        setPriviwItem(filterItem)
        setSeletButton(clickId)
    }

    return (
        <section>

            <div className="d-none d-md-block">
                <img className='w-100' src={BannerImg} alt="" />
            </div>

            <div className="container">

                <div className="pt-5 pb-4">
                    <Breadcrumb bread1="ADC Patner" bread2="" bread3="" />
                </div>

                <div className="row">
                    
                    {buttons && buttons.length > 0 && buttons.map((item, index) => (
                        <div className="col-12 col-md-3 pb-3 pb-md-0 px-3">
                        <button onClick={() => clickButton(item.id)} key={index} className={`w-100 ${ScssStyle.clickBtn} ${seletButton === item.id && ScssStyle.active}`}>{item.btnName}</button>
                        </div>
                    ))}
                    
                </div>

                <div className="row align-items-center py-5">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-md-end">
                        <img className="img-fluid" src={priviwItem[0].about.picture} alt="" />
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h3 className="mb-3">{priviwItem[0].about.title}</h3>
                        <p>{priviwItem[0].about.describtion}</p>
                    </div>
                </div>

                <div className="row align-items-center py-5">
                    {priviwItem[0].monthOffer && priviwItem[0].monthOffer.length > 0 && priviwItem[0].monthOffer.map((item, index) => (
                        <div key={index} className="col-12 col-md-4 col-lg-3 p-0">
                            <img className="img-fluid" src={item} alt="" />
                        </div>
                    ))}
                </div>


                <div className="row align-items-center py-5">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h3 className="mb-3">{priviwItem[0].policy.title}</h3>
                        <p>{priviwItem[0].policy.describtion}</p>
                    </div>
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-md-end">
                        <img className="img-fluid" src={priviwItem[0].policy.picture} alt="" />
                    </div> 
                </div>
                        
                <div className="row">
                    <div className="text-center">
                    <iframe max-width="560px" height="auto" src={`https://www.youtube.com/embed/BBS7Md2SjEs`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    </div>
                </div>
            </div>.
            <App_download />
        </section>
    )
}

export default Adc
