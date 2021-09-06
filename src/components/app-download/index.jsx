import React from 'react'
import PlayStore from "../../assets/icons/play-store-transparent.png"
import AppStore from "../../assets/icons/apple-store-transparent.png"
import ScssStyle from "./app_download.module.scss"
import { Link } from 'react-router-dom'
import Heading_Top from '../heading-top'

const App_download = () => {
    return (
        <section className="pb-5">
            <div className="container">

                <div className={` ${ScssStyle.appTop}`}>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 mb-4 mb-lg-0 text-center text-md-start">
                            <Heading_Top
                                title="Download Our App"
                                description=""
                                mainclass=""
                                titClass="d-inline-block"
                                descClass=" "
                            />
                        </div>

                        <div className="col-12 col-md-6 text-center text-md-start">
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="me-3" href="https://play.google.com/store/apps/details?id=com.sslwireless.easylife" target="_blank" ><img className={`${ScssStyle.app}`} src={PlayStore} alt="" /></a>
                                <a href="https://apps.apple.com/us/app/easy-life-guardian/id1493112484" target="_blank" ><img className={` ${ScssStyle.app}`} src={AppStore} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App_download
