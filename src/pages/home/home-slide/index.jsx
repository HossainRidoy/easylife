import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScssStyle from "./home_slide.module.scss"
import HomeSlideApi from "../../../api/home_slide";
import "animate.css"
const HomeSlide = () => {

    function NextArrow(props) {
        const { style, onClick } = props;
        return (
            <div style={{ ...style, display: "block", zIndex: "999", left: "20px" }} onClick={onClick} className="position-absolute top-50 translate-middle">
                <div style={{ width: "15px", height: "15px", borderTop: "2px solid white", borderLeft: "2px solid white", transform: "rotate(-45deg)", cursor: "pointer" }}> </div>
            </div>
        );
    }
    function PrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div style={{ ...style, display: "block", zIndex: "999", right: "20px" }} onClick={onClick} className="position-absolute top-50 translate-middle">
                <div style={{ width: "15px", height: "15px", borderTop: "2px solid white", borderLeft: "2px solid white", transform: "rotate(135deg)", cursor: "pointer" }}> </div>
            </div>
        );
    }


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <section className="pb-4 pb-lg-5 ">
            <Slider className="overflow-hidden" {...settings}>
                {HomeSlideApi && HomeSlideApi.length > 0 && HomeSlideApi.map((item, index) => (
                    <div key={index} className={`${ScssStyle.homeSlide}`}>

                        <img src={item.slideImg} alt="" className={`${ScssStyle.homeSlideImg}`} />

                        <div className={` ${ScssStyle.homeSlideTitle}`}>
                            <h1 className="text-white text-center  mb-4 font-weight-bold animate__animated animate__fadeInDown">{item.title}</h1>
                            <p className="text-white text-center mb-4  animate__animated animate__fadeInUp">{item.description}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <a href="https://play.google.com/store/apps/details?id=com.sslwireless.easylife" target="_blank" className="mx-1 mx-lg-3"><button className=" white-outline-btn ">{item.button_1}</button></a>

                                <Link to="/login" className="mx-1 mx-lg-3"><button className=" white-outline-btn">{item.button_2}</button></Link>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>

        </section>
    )
}

export default HomeSlide
