import React, { useEffect } from 'react'
import BannerImg from "../../assets/images/contact/contact-us-.jpg"
import Breadcrumb from "../../components/breadcrumb"
import Heading_Top from "../../components/heading-top"
import ScssStyle from "./contact.module.scss"
import App_download from "../../components/app-download"
import { useForm } from "react-hook-form";


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onsubmit = (data) => {
        alert("done")
        console.log(data)
        reset()
    }

    return (
        <section>
            <div>
                <img className="w-100" src={BannerImg} alt="" />
            </div>
            <div className="container">
                <div className="my-4">
                    <Breadcrumb bread1="Contact Us" bread2="" bread3="" />
                </div>
                <div className="mb-4">
                    <Heading_Top
                        title="Contact Us"
                        description=""
                        mainclass=""
                        titClass="d-inline-block"
                        descClass=""
                    />
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <form className="mb-5" onSubmit={handleSubmit(onsubmit)} action="">
                            <div className="form-group mb-4">
                                <input className={ScssStyle.formControl} type="text" placeholder="Full Name"  {...register("fullName", { required: true })} />
                                {errors.fullName && <label className="text-danger mt-1">The full name field is required.</label>}
                            </div>
                            <div className="form-group mb-4">
                                <input className={ScssStyle.formControl} type="email" placeholder="Email"  {...register("email", { required: true })} />
                                {errors.email && <label className="text-danger mt-1">The email field is required.</label>}
                            </div>
                            <div className="form-group mb-4">
                                <input className={ScssStyle.formControl} type="number" placeholder="Mobile Number"  {...register("number", { required: true })} />
                                {errors.number && <label className="text-danger mt-1">The mobile field is required.</label>}
                            </div>
                            <div className="form-group mb-4">
                                <textarea rows="7" className={ScssStyle.formControl} type="text" placeholder="Your Messager"  {...register("messager", { required: true })} />
                                {errors.messager && <label className="text-danger mt-1">The message field is required.</label>}
                            </div>

                            <div className="my-4">
                                <button className="black-outline-btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4599.222342082588!2d90.4173487625281!3d23.8041953821808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1627537199583!5m2!1sen!2sbd" width="100%" height="450"  loading="lazy"></iframe>
                        </div>
                    </div>
                </div>

                <div className="row  py-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-3 text-color-blue">Location</h2>
                        <ul className="p-0">
                            <li className="list-unstyled mb-1">Police Plaza Concord (13th Floor),</li>
                            <li className="list-unstyled mb-1">Tower-02, Plot #02, Road #144,</li>
                            <li className="list-unstyled mb-1">Gulshan Avenue, Dhaka</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-3 text-color-blue">Email</h2>
                        <ul className="p-0">
                            <li className="list-unstyled mb-1">easylife Police Plaza Concord</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-3 text-color-blue">Phone</h2>
                        <ul className="p-0">
                            <li className="list-unstyled mb-1">16622</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-3 text-color-blue">Follow us</h2>
                        <ul className="p-0">
                            <li className="list-unstyled mb-1">Police Plaza Concord (13th Floor),</li>
                            <li className="list-unstyled mb-1">Tower-02, Plot #02, Road #144,</li>
                            <li className="list-unstyled mb-1">Gulshan Avenue, Dhaka</li>
                        </ul>
                    </div>
                </div>



            </div>
            <App_download />
        </section>
    )
}

export default Contact
