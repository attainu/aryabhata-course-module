import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import TopNav from './TopNavbar';
import SideNav from './SideNavBar';
import Trending from '../container/Treding';
import Home from '../container/Home'
import Footer from './Footer';
import VideoDetails from '../container/Details'

const Routing = () => {
    return(
        <BrowserRouter>
            <TopNav/>
            <div className="row">
                <div className="col-md-2">
                    <SideNav/>
                </div>
                <div className="col-md-10">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/trending" component={Trending}/>
                    <Route exact path="/watch/:id" component={VideoDetails}/>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;