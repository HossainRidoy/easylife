import React from 'react'
import { Link } from 'react-router-dom'
import ScssStyle from "./breadcrumb.module.scss"

const svgIconColor = (color)=>{
    return(
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill={color} d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
    )
}

const Breadcrumb = (props) => {

    const colors = [
        {
            red:svgIconColor('#000')
        },
        {
            red:svgIconColor('#f71304')
        }
    ]
    

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-flex align-items-center m-0">

                <Link style={{width:"18px", display:"block"}} to="/" className="breadcrumb-item text-decoration-none ">{colors[0].red}</Link>

                {props.link1 ?  props.bread1 && <p className="breadcrumb-item text-color-orange text-dark"><Link to={props.link1} className="text-decoration-none text-dark">{props.bread1}</Link></p>: props.bread1 && <p className="breadcrumb-item text-color-orange">{props.bread1}</p>}
                {props.bread2 && <p className="breadcrumb-item text-color-orange">{props.bread2}</p>}
            </ol>
        </nav>
    )
}


export default Breadcrumb
