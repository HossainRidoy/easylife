import React, { useState, useEffect } from 'react'
import MediaList from "../../../api/media"
import App_download from "../../../components/app-download"
import Breadcrumb from "../../../components/breadcrumb"

const Media_view = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [itemView, setitemView] = useState()

    useEffect(() => {
        getItem(parseInt(props.match.params.id))
    }, [props.match.params.id])

    const getItem = (clickId) => {
        let filterItem = MediaList.filter((item) => item.id === clickId)
        setitemView(filterItem[0])
    }


    return (

        <section>

            <div className="container mb-5">
                {itemView && <div className="row">
                    <div className="col-12 col-md-7 col-lg-9">
                        <div className="div">
                            <div className="mb-5">
                                <img style={{ backgroundPosition: "center" }} className="w-100" src={itemView.picture} alt="" />
                            </div>
                            <div className="my-4">
                                <Breadcrumb bread1="Media" bread2="Title" bread3="" link1="/media" />
                            </div>
                            <h2 className="mb-4">We pay special attention to our people for their career development & distributing ownership to become a leader. We believe in helping </h2>
                            <p className="mb-4">16 september 2021</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est pariatur illum aliquid, officia nisi eos culpa autem corrupti in deleniti neque nemo incidunt commodi voluptates omnis excepturi voluptatibus ab labore. Officia corporis odit accusantium quae mollitia id neque sunt eligendi tenetur, aliquam doloremque, cum fugiat sequi pariatur quas. Nesciunt!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3">
                        <h3 className="mb-4">Related Media</h3>

                        <div className="card p-2">
                            <div className="row">
                                <div className=" col-4">
                                    <div>
                                        <img className="img-fluid r" src={itemView.picture} alt="" />
                                    </div>



                                </div>
                                <div className="col-8">
                                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sunt iure odio ipsum ex iste corporis, at dolore .</p>
                                    <p className="">20 september 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
            <App_download />
        </section>
    )
}

export default Media_view
