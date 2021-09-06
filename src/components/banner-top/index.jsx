import React from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./banner_top.module.scss"

const Banner_top = (props) => {
    return (
        <section>
            <div className={ScssStyle.cardImg}>
                <img src={props.bgImg} className="card-img" alt="..." />
                <div className={ScssStyle.imgOverlay}>
                    <h1 className={ScssStyle.title}>{props.title}</h1>
                    <a href="https://play.google.com/store/apps/details?id=com.sslwireless.easylife " target="_blank" className="mt-5 d-none d-md-block"><button className="white-outline-btn">Get The App</button></a>
                </div>
            </div>
        </section>
    )
}

export default Banner_top
