import React from 'react'
 import MissionImg from "../../../assets/images/about/our-mission/our-mission.jpg"
import Heading_Top from '../../../components/heading-top'
import ScssStyle from "./our_mission.module.scss"



const Our_mission = (props) => {


    return (
        <section id={props.id} className="pb-5 pt-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-lg-0">
                       <img style={{borderRadius:"30px"}} className="img-fluid" src={MissionImg} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                         <div className="">
                         <Heading_Top
                            title="Our Mission"
                            description="Sponsored by Brac, Square, and Apex; Easylife is the digital platform of Guardian Life Insurance Ltd. EasyLife started its journey from 24th September 2018 and has already achieved a good reputation in the Insurance Industry and is looking to grow further in the coming years. Guardian Life Insurance Limited is striving to ensure trust in the hearts of our stakeholders through good governance & transparent digital process. Guardian Life Insurance Limited has initiated Easylife with the promise of helping to build a better and more secure future for our valuable customers by providing them with world-class digital insurance products and premium customer service. Easylife within only two years of launch has bagged multiple national & international awards. EasyLife was awarded the"
                            mainclass=""
                            titClass="d-inline-block mb-4"
                            descClass=" "
                        />
                         </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Our_mission
