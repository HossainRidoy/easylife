import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/images/logo/easylify-header.svg"
import Heading_Top from "../../../components/heading-top"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileImg from "../../../assets/images/mobiles/mobile.jpg"
import ScssStyle from "./protected.module.scss"
import Ando from "../../../assets/images/mobiles/2.jpg"
// import Ando from "../../../assets/images/mobiles/1.jpg"


const Protected_minutes = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className="pb-5 py-lg-5 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="mb-5">
                            <div>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="mb-5">
                                {/* Heading Top start */}
                                <Heading_Top
                                    title="Get Protected In Minutes"
                                    description="Download the EasyLife app from the Play or App Store.Provide your mobile number and birthdate to Sign up the app.Create free Digital loyalty card by uploading your name, email,photo and Choose your favorite policy to avail all digital offers & benefits."
                                    mainclass=""
                                    titClass="mb-3"
                                    descClass="" />
                                {/* Heading Top end */}
                            </div>

                            <div className="mt-5 d-flex justify-content-center">
                                <a href="https://play.google.com/store/apps/details?id=com.sslwireless.easylife" target="_blank" className="me-4"><button className="black-outline-btn">Get The App</button></a>
                                <Link to="/products"><button className="black-outline-btn">Get The Quate</button></Link>
                            </div>
                        </div>
                    </div>
                    <div id="mobileSlide" className="mx-auto">
                        <div className="power-button"></div>
                        <div className="mobile_body">
                            <Slider {...settings}>
                                <div>
                                    <img className="img-fluid" src={Ando} alt="" />
                                </div>
                                <div>
                                    <img className="img-fluid" src={Ando} alt="" />
                                </div>

                            </Slider>
                        </div>
                    </div>


                    {/* <div className="col-12 col-md-6 overflow-hidden d-none d-md-block">
                        <div id="mobileSlide" className={`mx-auto ${ScssStyle.mobileBody}`}>
                            <div className={ScssStyle.screen}>
                                <Slider {...settings}>
                                    <div>
                                        <img className={ScssStyle.andoImg} src={Ando} alt="" />
                                    </div>
                                    <div>
                                        <img className={ScssStyle.andoImg} src={Ando} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Protected_minutes
