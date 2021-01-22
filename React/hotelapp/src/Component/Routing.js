import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import ListingApi from './Listing/listingapi';
import Details from './Details/details';
import PlacBooking from './Booking/placeBooking'
import Booking from './Booking/viewBooking';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/list/:id" component={ListingApi}/>
                    <Route  path="/details/:id" component={Details}/>
                    <Route  path="/booking/:id" component={PlacBooking}/>
                    <Route  path="/viewbooking" component={Booking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;