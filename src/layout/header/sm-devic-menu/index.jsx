import React, { useEffect, useState, useRef } from 'react'
import Logo from "../../../assets/images/logo/easylify-header.svg"
import SearchBar from "../../../assets/icons/search.svg"
import Bars from "../../../assets/icons/menubar.svg"
import ScssStyle from "./smdevic.module.scss"
import { Link, NavLink } from 'react-router-dom'
import digitalOffer from '../../../api/digital_offers'
import Products from '../../../api/products'

const Menus = [
    {
        id: 1,
        nav: "Home",
        url: "/",
    },
    {
        id: 2,
        nav: "About Easylife",
        url: "/about",
    },
    {
        id: 3,
        nav: "Products",
        url: "/products",
    },
    {
        id: 4,
        nav: "digital Offers",
        url: "/digital_offers",
    },
    {
        id: 5,
        nav: "Claim",
        url: "/claim",
    },
    {
        id: 6,
        nav: "ADC",
        url: "/adc",
    },
    {
        id: 7,
        nav: "Profile",
        url: "/login",
    },
    {
        id: 8,
        nav: "FAQ",
        url: "/faq",
    },
    {
        id: 9,
        nav: "Privacy Policy",
        url: "/pricacy_policy",
    },
    {
        id: 10,
        nav: "Login",
        url: "/login",
    },
    {
        id: 11,
        nav: "Buy Now",
        url: "/products",
    },
]

const SmDevis = () => {

    const [click, setClick] = useState(false)



    //Menu Toggle button start
        const dropdownMenu = document.getElementById("dropdownMenu")

        const toggleButton = () => {
            dropdownMenu.classList.toggle(ScssStyle.btntoggle)
        }
    //Menu Toggle button end

    //search Toggle button start
        let inputRef = useRef(false)

        const searchBtn = () => {
            
            setClick(!click)
            inputRef.current.value = ''
            setSearchPro()
           //click && inputRef.current.focus()
           console.log()
        }

    //search Toggle button end

    // search input text start
        const [searchPro, setSearchPro] = useState()

        const inputTitle = (e) => {

            let inputV = e.target.value
            let filterItem = digitalOffer.filter((item) => item.title.toLocaleLowerCase().indexOf(inputV.toLocaleLowerCase()) > -1)
            // filterItem.length > 0 ? setSearchPro(filterItem):setSearchPro()
            setSearchPro(filterItem)
        }
    //search input text end

    return (
        <section className={ScssStyle.navbarTop}>
            <div className="container">
                <nav className="d-flex justify-content-between align-items-center">

                    <Link to="/" className={ScssStyle.logo}>
                        <img className="img-fluid" src={Logo} alt="" />
                    </Link>

                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center font-size-18">
                            <button className="border-0 bg-white text-danger">EN</button>
                            <span className="mx-1">|</span>
                            <button className={`border-0 bg-white ${ScssStyle.bangla}`}>বাংলা</button>
                        </div>


                        <div className={ScssStyle.searchBar}>
                            <img onClick={searchBtn} className="img-fluid" src={SearchBar} alt="" />
                        </div>

                        <div id="inputfill" className={`w-100 position-absolute top-0 start-50 translate-middle-x ${ScssStyle.inputSearch}  ${click && ScssStyle.searchToggle}`}>
                            <input ref={inputRef} onChange={inputTitle} className="form-control py-2" type="text" placeholder="Search..." />
                            <div style={{ background: "white" }}>

                                {searchPro && searchPro.length > 0 && searchPro.map((item, index) => (
                                    <Link onClick={searchBtn} className="text-dark text-decoration-none d-block ms-4 py-2" key={index} to={`/digital-offer/${item.id}`}>{item.title}</Link>
                                ))}

                            </div>
                        </div>



                        <div className={ScssStyle.menubar}>
                            <div onClick={toggleButton}>
                                <img className="img-fluid" src={Bars} alt="" />
                            </div>
                            <nav id="dropdownMenu" className={`flex-column shadow ${ScssStyle.dropdownMenu}`}>
                                {Menus && Menus.length > 0 && Menus.map((navItem, index) => (
                                    <Link onClick={toggleButton} to={navItem.url} key={index} className={`nav-link ${ScssStyle.dropdownList}`}>{navItem.nav}</Link>
                                ))}
                            </nav>
                        </div>
                        <Link to="/products" className="text-decoration-none"><button className={` d-none d-md-block ${ScssStyle.whiteOutlineBtn}`}>Buy Now</button></Link>
                    </div>
                </nav>
            </div>
        </section >
    )
}

export default SmDevis
