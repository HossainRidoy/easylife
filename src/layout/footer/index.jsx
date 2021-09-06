import React from 'react'
import ScssStyle from "./footer.module.scss"
import Logo from "../../assets/images/logo/easylife-footer.svg"
import GooglePlay from "../../assets/icons/play-store-transparent.png"
import AppStore from "../../assets/icons/apple-store-transparent.png"

import Apex from "../../assets/images/our-sponsors/apex.png"
import Brac from "../../assets/images/our-sponsors/brac.png"
import Square from "../../assets/images/our-sponsors/square.png"

import Gli from "../../assets/images/our-sponsors/gli.png"
import { Link, NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <section className={ScssStyle.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <div className="d-sm-flex align-items-sm-center  justify-content-sm-around flex-lg-column">
                            <Link to="/" className={`mb-2 ${ScssStyle.logo}`}>
                                <img className="w-100" src={Logo} alt="" />
                            </Link>
                            <div className="">
                                <a className="mx-2" href="https://play.google.com/store/apps/details?id=com.sslwireless.easylife" target="_blank">
                                    <img className={`img-fluid p-1 ${ScssStyle.app}`} src={GooglePlay} alt="" />
                                </a>
                                <a className="mx-2" href="https://apps.apple.com/us/app/easy-life-guardian/id1493112484" target="_blank">
                                    <img className={`img-fluid p-1 ${ScssStyle.app}`} src={AppStore} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <div className="row justify-content-between">
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to="/about" className="text-white text-decoration-none py-1 d-inline-block">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products" className="text-white text-decoration-none py-1 d-inline-block">Products</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/digital_offers" className="text-white text-decoration-none py-1 d-inline-block">Offers</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to="/pricacy_policy" className="text-white text-decoration-none py-1 d-inline-block">Privacy Policy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact" className="text-white text-decoration-none py-1 d-inline-block">Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faq" className="text-white text-decoration-none py-1 d-inline-block">FAQ</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">

                        <form action="" className="mb-5">
                            <p className="text-white mb-2">Subscribe for newsletter</p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control py-2" placeholder="Type your email" />
                                <button className="btn btn-dark py-2 px-4" type="button" id="button-addon2">Send</button>
                            </div>
                        </form>

                        <div className="text-white mb-4">
                            <p className="mb-2">Our Sponsors</p>
                            <div className=" d-flex">
                                <a href="https://www.apexfootwearltd.com/" target="_blank"> <img style={{ height: "40px" }} className={`img-fluid me-4 ${ScssStyle.sponsorsIcon}`} src={Apex} alt="" /></a>
                                <a href="http://www.brac.net/" target="_blank"> <img style={{ height: "40px" }} className={`img-fluid me-4 ${ScssStyle.sponsorsIcon}`} src={Brac} alt="" /></a>
                                <a href="https://www.squaregroup.com/" target="_blank"> <img style={{ height: "40px" }} className={`img-fluid me-4 ${ScssStyle.sponsorsIcon}`} src={Square} alt="" /></a>
                            </div>

                        </div>

                        <div className="text-center text-lg-start">
                            <a href="https://guardianlife.com.bd/" target="_blank" className="text-white text-decoration-none">
                                Powered by
                                <img className={`img-fluid ms-2 ${ScssStyle.sponsorsIcon}`} src={Gli} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
