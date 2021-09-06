import React from 'react'
import ScssStyle from "./heading_top.module.scss"

const Heading_Top =(props)=> {
    return (
        <section className="">
         <div className={`${props.mainclass}`}>
             <h2 className={` ${ScssStyle.title}  ${props.titClass}`}>{props.title}</h2>
            {props.description && <p className={`${ScssStyle.subTitle} ${props.descClass}`}>{props.description}</p>} 
         </div>
        </section>
    )
}

export default Heading_Top
