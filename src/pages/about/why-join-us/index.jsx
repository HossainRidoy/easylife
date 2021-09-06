import React from 'react'
import ScssStyle from "./why_join_us.module.scss"
import Circle from "../../../components/circleImg"
import Cimg_1 from "../../../assets/images/about/circleImg/1.jpg"
import Cimg_2 from "../../../assets/images/about/circleImg/2.jpg"
import Cimg_3 from "../../../assets/images/about/circleImg/3.jpg"
import Arrow from "../../../assets/icons/chevron-right-solid.svg"
import Heading_Top from '../../../components/heading-top'

const Items = [
    {
        id: 1,
        arrowRight: Arrow,
        title: "Development",
        describtion: "We pay special attention to our people for their career development & distributing ownership to become a leader. We believe in helping our people to grow their leadershipcapacity by giving them the frredom & opportunity to learn & grow"
    },
    {
        id: 2,
        arrowRight: Arrow,
        title: "Culture",
        describtion: "In the selection of our employees, we look for highly motivated, talented, dynamic, honest and friendly people who are willing to get involved and uphold the corporate culture within and beyond the organization."
    },
    {
        id: 3,
        arrowRight: Arrow,
        title: "Grow Togther",
        describtion: "Team motivation is a prime factor in the success and productivity of any business. We recognize that our team members are our fundamental assets and we are dedicated to provide a fair, friendly and energetic work environment."
    },
    {
        id: 4,
        arrowRight: Arrow,
        title: "Join Us",
        describtion: "To become a resource of the pioneering digital insurance company and to build a transparent insurance marketplace. Also strive for excellence to deliver superior value to the customers"
    },

]


const Why_join_us = (props) => {



    return (
        <section id={props.id} className="pb-5 py-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                        <Circle img1={Cimg_1} img2={Cimg_2} img3={Cimg_3} />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="">
                            <Heading_Top
                                title="Why Join Us"
                                description=""
                                mainclass=""
                                titClass="d-inline-block mb-4"
                                descClass=" "
                            />

                        </div>

                        {Items && Items.length > 0 && Items.map((item, index) => (
                            <div key={index} className="d-flex mb-4">
                                <div className="h">
                                    <img style={{ width: "11px" }} className="" src={item.arrowRight} alt="" />
                                </div>
                                <div className="ms-3">
                                    <h3 className="text-color-orange mb-2">{item.title}</h3>
                                    <p>{item.describtion}</p>
                                </div>
                            </div>
                        ))}
                        
                        <a className={ScssStyle.joinBtb} href="https://guardianlife.com.bd/graduates" target="_blank">View All</a >

                    </div>



                </div>
            </div>
        </section>
    )
}

export default Why_join_us
