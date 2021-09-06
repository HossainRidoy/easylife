import React, { useEffect, useState } from 'react'
import ScssStyle from "./digital.module.scss"
import App_download from "../../../components/app-download"
import Breadcrumb from "../../../components/breadcrumb"
import Products from '../../../api/digital_offers'




const Digital_offer_view = (props) => {

    const [state, setstate] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
        getProductId(parseInt(props.match.params.id))
    }, [props.match.params.id])
    const getProductId = (clickId) => {
        let filterItem = Products.filter((item) => (item.id === clickId))
        setstate(filterItem[0])
    }
    return (
        <section className={ScssStyle.policyTop}>

            <div className="container">

                <div className="my-4">
                    <Breadcrumb bread1="Digital Offers" bread2={state && state.title} bread3="" link1="/digital_offers" />
                </div>

            </div>
            

            <div className={`row align-items-center justify-content-center mb-5 ${ScssStyle.cardTop}`}>
                <div className={ScssStyle.cardHeader}>
                    {state && <div className={ScssStyle.card}>
                        <div className="card-body">
                            <div className="row align-items-center mb-3">
                                <div className="col-12 col-sm-8 mb-3 mb-sm-0">
                                    <img className={ScssStyle.image} src={state.picture} alt="" />
                                </div>
                                <div className="col-12 col-sm-4">
                                    <h3 className="mb-3">{state.title}</h3>
                                    <p className="mb-3"> User can avail this service</p>
                                    <p className="mb-3"><span className="text-color-orange">{state.discount}% </span> <span>Off</span></p>
                                </div>
                            </div>
                            <div className="bg-light py-3 px-4 rounded-pill mb-3">
                                <h3 className="">Offer Condition</h3>
                            </div>
                            <div className="din">
                                <p className="mb-4">{state.description}</p>
                            </div>
                            <div className="text-center">
                                <button className="black-outline-btn">Get a Quate</button>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <App_download />
        </section>
    )
}

export default Digital_offer_view
