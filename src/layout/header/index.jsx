import React, { useEffect, useState } from 'react'
import InlineMenu from "../header/inline-menu"
import SmDevic from "../header/sm-devic-menu"
import ScssStyle from "./header.module.scss"

const Header = () => {

    const [headerHight, setHeaderHight] = useState(0)
    const [headerHightShow, setHeaderHightShow] = useState(false)

    useEffect(() => {
        let sticky = document.getElementById("sticky")
        window.addEventListener("scroll", function () {

            if (window.scrollY > 0) {
                sticky.classList.add(`${ScssStyle.sticky}`)
                setHeaderHightShow(true)
            } else {
                sticky.classList.remove(`${ScssStyle.sticky}`)
                setHeaderHightShow(false)
            }
        })

        const stickyHeight = document.getElementById('sticky');
        setHeaderHight(stickyHeight.clientHeight)
    }, [])




    return (
      <>
        <div id="headerHight" style={{width:"100%", height:`${headerHight}px`, background:"red",position:'relative', display:headerHightShow ? 'block':'none'}}></div>
        <section id="sticky" className="bg-white" >
            {window.innerWidth > 1371 ? <InlineMenu /> : <SmDevic />}
        </section>
      </>
    )
}

export default Header
