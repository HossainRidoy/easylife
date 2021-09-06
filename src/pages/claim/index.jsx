import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import BannerImg from "../../assets/images/claim/claim.jpg"
import Breadcrumb from "../../components/breadcrumb"
import Heading_Top from "../../components/heading-top"
import ScssStyle from "./claim.module.scss"
import { useForm } from "react-hook-form";
import Image from "../../assets/images/claim/1.jpg"
import App_download from "../../components/app-download"

const Claim = () => {

    useEffect(() => {
        window.scrollTo(0, 0)



    }, [])

    const { register, handleSubmit } = useForm();


    const input1 = useRef()
    const input2 = useRef()

    const buttonClick1 = () => {
        input2.current.classList.add("d-none")
        input1.current.classList.remove("d-none")

    }
    const buttonClick2 = () => {
        input2.current.classList.remove("d-none")
        input1.current.classList.add("d-none")
    }

    return (
        <section>
            <div className="d-none d-md-block">
                <img className='w-100' src={BannerImg} alt="" />
            </div>


            <div className="container">

                <div className="pt-5 pb-4">
                    <Breadcrumb bread1="Claim" bread2="" bread3="" />
                </div>

                <div className="">
                    <Heading_Top
                        title="Claim Insurance"
                        description="To claim your Insurance please input below information"
                        mainclass=""
                        titClass="d-inline-block mb-4"
                        descClass=" "
                    />
                </div>

                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">

                        <p className="text-center font-size-20 py-4">Choose one to proceed</p>

                        <form className="mb-5" action="">
                            <div className="d-sm-flex justify-content-center">
                                <div className="form-group me-5 mb-4 mb-lg-0 ">
                                    <input className={`d-none ${ScssStyle.radioInput}`} id="radio1" type="radio" name="choose" />
                                    <label onClick={buttonClick1} className={ScssStyle.radio} htmlFor="radio1">Self claim</label>
                                </div>

                                <div className="form-group">
                                    <input className={`d-none ${ScssStyle.radioInput}`} id="radio2" type="radio" name="choose" />
                                    <label onClick={buttonClick2} className={ScssStyle.radio} htmlFor="radio2">Claimed by Nominee</label>
                                </div>
                            </div>
                            <p className="text-center font-size-20 py-3 text-color-blue">Choose Claim Type</p>

                            <select className={ScssStyle.formControl} {...register("claim")}>
                                <option value="">Select Claim Type</option>
                                <option value="Hi">Hi</option>
                                <option value="CI">CI</option>
                                <option value="OPD">OPD</option>
                            </select>
                            <p className="text-center font-size-20 py-3 text-color-blue">Your Information</p>

                            <div id="input1" ref={input1} className="form-group mb-3">
                                <input className={ScssStyle.formControl} type="number" placeholder="Number" />
                            </div>
                            <div id="input2" ref={input2} className="form-group mb-3 d-none">
                                <input className={ScssStyle.formControl} type="text" placeholder="Nominee Mobile Number" />
                            </div>
                            <div className="form-group mb-3">
                                <input className={ScssStyle.formControl} type="text" placeholder="Policy Holder Name" />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className={ScssStyle.formControl} type="number" placeholder="Policy Number" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input className={ScssStyle.formControl} type="number" placeholder="Policy Holder NID Number" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="black-outline-btn">Submit</button>
                            </div>
                        </form>
                        {/* <div className="mb-5">
                            <button className="black-outline-btn">Next</button>
                        </div> */}
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-6">
                        <img className="img-fluid" src={Image} alt="" />
                    </div>
                </div>
            </div>
            <App_download />
        </section>
    )
}

export default Claim
