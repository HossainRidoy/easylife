import React, { useEffect, useState } from 'react'
import Img from "../../../assets/images/plan_card/1.jpg"
import ScssStyle from "./policy.module.scss"
import App_download from "../../../components/app-download"
import Breadcrumb from "../../../components/breadcrumb"
import Products from '../../../api/products'
import { Link } from 'react-router-dom'



const Policy_view = (props) => {

    const [state, setstate] = useState()


    useEffect(() => {
        window.scrollTo(0, 0)
        getProductId(parseInt(props.match.params.id))
    }, [])
    const getProductId = (clickId) => {
        let filterItem = Products.filter((item) => (item.id === clickId))
        setstate(filterItem[0])
    }
    state && console.log(state)
    return (
        <section className={ScssStyle.policyTop}>
            <div className="container">

                <div className="my-4">
                    <Breadcrumb bread1="Products" bread2={state && state.title} bread3="" link1="/products" />
                </div>

            </div>
            <div className={`mb-5 ${ScssStyle.cardTop}`}>
                <div className={ScssStyle.cardHeader}>
                    {state && <div className={ScssStyle.card}>
                        <div className="card-body">
                            <div className="row align-items-center mb-3">
                                <div className="col-12 col-sm-6 mb-4 mb-sm-0">
                                    <img className={ScssStyle.image} src={state.picture} alt="" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-4">An attractive pure term life coverage at a very affordable price. Customers can get up to 10 lac taka coverage for upto 25 years</p>
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-3 font-size-18 font-weight-bold text-color-orange">Coverage</p>
                                            <p className="font-size-18">Up to BDT {state.coverage}</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-3 font-size-18 font-weight-bold text-color-orange">Term</p>
                                            <p className="font-size-18">Up to {state.term} Years</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="mb-3 font-size-18 font-weight-bold text-color-orange">Premium</p>
                                            <p className="font-size-18">As low as BDT {state.preminum}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light py-3 px-4 my-4 rounded-pill">
                                <h3>Details Of The Product</h3>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-sm-6">
                                    <ul className="">
                                        <li className="list-unstyled pb-2">Maturity Benefit: No</li>
                                        <li className="list-unstyled pb-2">Sum Assured: Maximum BDT 10 Lac</li>
                                        <li className="list-unstyled pb-2">Term: 10 to 25 years</li>
                                        <li className="list-unstyled pb-2">Surrender Option: No</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <ul className="">
                                        <li className="list-unstyled pb-2">Death/TPD Benefit: Full Sum Assured</li>
                                        <li className="list-unstyled pb-2">Premium Payment Mode: Yearly throughout the policy term</li>
                                        <li className="list-unstyled pb-2">Age: 18 to 45 years nearest birthday</li>
                                        <li className="list-unstyled pb-2">Medical Test: No need</li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                    </div>}

                    <div className="text-center">
                       <Link to="/login"> <button className="black-outline-btn">Get a Quate</button></Link>
                    </div>
                </div>
            </div>
            <App_download />
        </section>
    )
}

export default Policy_view
