import React from 'react'
import ScssStyle from "./awards.module.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image_1 from "../../../assets/images/about/aqards/1.jpg"
import Image_2 from "../../../assets/images/about/aqards/2.jpg"
import Image_3 from "../../../assets/images/about/aqards/3.jpg"
import Heading_Top from '../../../components/heading-top';



const Awards = (props) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <section id={props.id} className="pb-5 py-lg-5">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-md-2 mb-4 mb-md-0">
                        <Heading_Top
                            title="Awards"
                            description=""
                            mainclass=""
                            titClass="d-inline-block"
                            descClass=" "
                        />
                    </div>
                    <div className="col-12 col-md-9 overflow-hidden">
                        <Slider {...settings}>
                            <div>
                                <img className="img-fluid" src={Image_1} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={Image_2} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={Image_3} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={Image_1} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={Image_2} alt="" />
                            </div>
                            <div>
                                <img className="img-fluid" src={Image_3} alt="" />
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Awards
