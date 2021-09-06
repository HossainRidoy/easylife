import React, { useState } from 'react'
import ScssStyle from "./media.module.scss"
import MediaItemsList from "../../../api/media"
import Heading_Top from '../../../components/heading-top';
import Image_1 from "../../../assets/images/about/media/Innovation_Award.jpg"
import Arrow from "../../../assets/icons/arrow-right.svg"
import { Link } from 'react-router-dom';




const Media = (props) => {

    const [mediaCardPrint, setMediaCardPrint] = useState(MediaItemsList.filter((item, index) => index < 2))


    return (
        <section id={props.id} className="pb-5">
            <div className="container">
                <div className="mb-4">
                    <div className="">
                        <Heading_Top
                            title="Media"
                            description=""
                            mainclass="text-center"
                            titClass="d-inline-block mb-4"
                            descClass=" "
                        />
                    </div>
                </div>

                <div className="row">
                    {mediaCardPrint && mediaCardPrint.length > 0 && mediaCardPrint.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 pb-5 pb-lg-0">
                            <Link to={item.url} className={` ${ScssStyle.card}`}>
                                <div className={` ${ScssStyle.cardImg}`}>
                                    <img className={`w-100 ${ScssStyle.image}`} src={item.picture} alt="" />
                                </div>
                                <div className={`card-body ${ScssStyle.cardBody}`}>
                                    <h2 className="mb-3">{item.title}</h2>
                                </div>
                                <div className="d-flex align-items-center justify-content-between p-3">
                                    <p>{item.date}</p>
                                    <button className="btn">
                                        <img style={{ width: "15px" }} src={Arrow} alt="" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                    <div className="text-center pt-lg-5">
                        <button className="black-outline-btn">View All</button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Media
