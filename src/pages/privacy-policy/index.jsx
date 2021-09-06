import React,{useEffect} from 'react'
import BannerImg from "../../assets/images/privacy-policy/Privacy_policy.jpg"
import Breadcrumb from "../../components/breadcrumb"
import Heading_Top from "../../components/heading-top"
import ScssStyle from "./privacy_policy.module.scss"
import Privacy_policy_list from '../../api/privacy_policy'
import App_download from "../../components/app-download"

const Privacy_policy = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section>
            <div>
                <img className="w-100" src={BannerImg} alt="" />
            </div>
            <div className="container">
                <div className="my-4">
                    <Breadcrumb bread1="Privacy Policy" bread2="" bread3="" />
                </div>

                <div className="pb-5 ">
                    <Heading_Top
                        title="Privacy Policy"
                        description="Easylife is a digital platform of Guardian Life Insurance shall apply to use and disclosure of sensitive personal data or information and personal information (Personal Information) provided by You (which means and include as a Customer or a User) on the Website or otherwise at the time of client acceptance / registration/application in connection with availing products or services or facilities of Easylife. This privacy policy shall be read in conjunction with the Terms of Use (Terms and Conditions) agreed by you while registering on its Website for availing its services."
                        mainclass="d-lg-flex align-items-lg-center"
                        titClass="mb-3 mb-lg-0 d-inline-block col-lg-6 text-lg-end"
                        descClass="ms-lg-3"
                    />
                </div>
                {Privacy_policy_list && Privacy_policy_list.length > 0 && Privacy_policy_list.map((item, index) => (
                    <div key={index} className={ScssStyle.card}>
                        <h3 className={`mb-4 ${ScssStyle.title}`}>{item.title}</h3>
                        <p className="mb-1">{item.describtion}</p>
                        <ol className="m-0 ps-3">
                            {item.lists && item.lists.length > 0 && item.lists.map((item, index) => (
                                <li key={index} className="mb-1">{item}</li>
                            ))}


                        </ol>
                        <p className="mb-1">{item.paragrap}</p>
                    </div>
                ))}


            </div>
            <App_download/>
        </section>
    )
}

export default Privacy_policy
