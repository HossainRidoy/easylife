import React, { useEffect } from 'react'
import Logo from "../../../assets/images/logo/easylify-header.svg"
import Menus from "../../../api/header/menus"
import ScssStyle from "./inlineMenu.module.scss"
import { Link, NavLink } from 'react-router-dom'

import MenuBar from "../../../assets/icons/menubar.svg"

const Header = () => {


    useEffect(() => {


    }, [])

    return (
        <section id="fixedTop" className={ScssStyle.navbarTop}>
            <div className="container">
                <nav className="navbar p-0">
                    <Link to="/" className={ScssStyle.logo}>
                        <img className="img-fluid" src={Logo} alt="" />
                    </Link>
                    <div className="d-flex align-items-center">
                        <ul className="nav">
                            {Menus && Menus.length > 0 && Menus.map((navItem, index) => (
                                <li className='nav-item' key={index}>
                                    <NavLink activeClassName={ScssStyle.active} exact={true} to={navItem.url} className={`nav-link font-size-18 ${ScssStyle.navLink}`}>{navItem.nav}</NavLink>
                                </li>
                            ))}

                        </ul>
                        <div className="d-flex align-items-center font-size-18">
                            <button className="border-0 bg-white text-danger">English</button>
                            <span className="mx-1">|</span>
                            <button className={`border-0 bg-white ${ScssStyle.bangla}`}>বাংলা</button>
                        </div>
                        <div className={ScssStyle.menuBar}>
                            <img className="w-100" src={MenuBar} alt="" />
                            <nav className={`nav flex-column shadow ${ScssStyle.dropdownMenu}`}>
                                <Link to="/login" className={`nav-link ${ScssStyle.dropdownList}`}>My Profile</Link>
                                <Link to="/faq" className={`nav-link ${ScssStyle.dropdownList}`}>FAQ</Link>
                                <Link to="/pricacy_policy" className={`nav-link ${ScssStyle.dropdownList}`}>Privacy policy</Link>
                                <Link to="/login" className={`nav-link ${ScssStyle.dropdownList}`}>Login</Link>
                              
                            </nav>
                        </div>
                        <Link to="/products"> <button className={ScssStyle.headerButton}>Buy Now</button></Link>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header
