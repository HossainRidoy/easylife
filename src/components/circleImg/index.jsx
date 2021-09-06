import React from 'react'
import ScssStyle from "./cirleImg.module.scss"

const CircleImg = (props) => {
    return (
        <section className="d-flex justify-content-center">
            <div className={` ${ScssStyle.cirleHead}`}>
                <img className={` ${ScssStyle.cirle1} ${ScssStyle.cirle}`} src={props.img1} alt="" />
                <img className={` ${ScssStyle.cirle2} ${ScssStyle.cirle}`} src={props.img2} alt="" />
                <img className={` ${ScssStyle.cirle3} ${ScssStyle.cirle}`} src={props.img3} alt="" />
            </div>
        </section>
    )
}

export default CircleImg
