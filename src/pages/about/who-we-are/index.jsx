import React,{useEffect} from 'react'
import Icon_2 from "../../../assets/images/about/who-we-are/user-plus.svg"
import Icon_1 from "../../../assets/images/about/who-we-are/users.svg"
import Icon_3 from "../../../assets/images/about/who-we-are/target.svg"
import Icon_4 from "../../../assets/images/about/who-we-are/bangladesh-map.svg"
import ScssStyle from "./who_we-are.module.scss"
import CountUp from 'react-countup';
import Heading_Top from '../../../components/heading-top'

const Users = [
    {
        id: 1,
        icon: Icon_1,
        count: 198988,
        describtion: "No. of App Users"
    },
    {
        id: 2,
        icon: Icon_2,
        count: 30996,
        describtion: "No. of Digital Loyalty Users"
    },
    {
        id: 3,
        icon: Icon_3,
        count: 1499819,
        describtion: "No. of Customer Reach"
    },
    {
        id: 4,
        icon: Icon_4,
        count: 64,
        describtion: "No. of Districts Coverage"
    },
]


const Who_we_are = (props) => {

  


    return (
        <section id={props.id} className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mb-4 mb-lg-0">
                        <div className="di">
                            <Heading_Top
                                title="Who We Are"
                                description="Sponsored by Brac, Square, and Apex; Easylife is the digital platform of Guardian Life Insurance Ltd. EasyLife started its journey from 24th September 2018 and has already achieved a good reputation in the Insurance Industry and is looking to grow further in the coming years. Guardian Life Insurance Limited is striving to ensure trust in the hearts of our stakeholders through good governance & transparent digital process. Guardian Life Insurance Limited has initiated Easylife with the promise of helping to build a better and more secure future for our valuable customers by providing them with world-class digital insurance products and premium customer service. Easylife within only two years of launch has bagged multiple national & international awards. EasyLife was awarded the"
                                mainclass=""
                                titClass="d-inline-block mb-4"
                                descClass=" "
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="row">
                            {Users && Users.length > 0 && Users.map((item, index) => (
                                <div key={index} className="col-12 col-sm-6 p-2">
                                    <div className={`text-center ${ScssStyle.card}`}>
                                        <img style={{ height: "90px" }} className="img-fluid" src={item.icon} alt="" />
                                        <h2 className="mb-2"><CountUp end={item.count} duration={10} /></h2>
                                        <p className="font-size-18">{item.describtion}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Who_we_are
