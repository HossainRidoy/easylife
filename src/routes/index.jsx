import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Layout from '../layout'
import About from '../pages/about'
import Media_view from '../pages/about/media-view'
import Claim from '../pages/claim'
import Digital_offers from '../pages/digital_offers'
import Home from '../pages/home'
import Products from '../pages/products'
import Adc from '../pages/adc'
import privacy_policy from '../pages/privacy-policy'
import Contact from "../pages/contact"
import Faq from '../pages/faq'
import Login from '../pages/login'
import Policy_view from '../pages/products/policy-view'
import Digital_offer_view from '../pages/digital_offers/digital-offer-view'
const Routes =()=> {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/about" exact component={About}/>
                   <Route path="/media/:name/:id" exact component={Media_view}/>
                   <Route path="/products" exact component={Products}/>
                   <Route path="/digital_offers" exact component={Digital_offers}/>
                   <Route path="/claim" exact component={Claim}/>
                   <Route path="/adc" exact component={Adc}/>
                   <Route path="/pricacy_policy" exact component={privacy_policy}/>
                   <Route path="/contact" exact component={Contact}/>
                   <Route path="/faq" exact component={Faq}/>
                   <Route path="/login" exact component={Login}/>

                   <Route path="/policy/:id" exact component={Policy_view}/>
                   <Route path="/digital-offer/:id" exact component={Digital_offer_view}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes
