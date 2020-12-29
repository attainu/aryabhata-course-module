import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopNav from './TopNavbar';
import SideNav from './SideNavBar';
import Trending from '../container/Treding';
import Footer from './Footer'

const Routing = () => {
    return(
        <BrowserRouter>
            <TopNav/>
            <div className="row">
                <div className="col-md-2">
                    <SideNav/>
                </div>
                <div className="col-md-10">
                    <Route exact path="/" component={Trending}/>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;