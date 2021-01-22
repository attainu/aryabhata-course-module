import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './Newspage/Home';
import Post from './Posts/post';
import PostDetails from './Posts/postdetails';
import Profile from './Profile/profile'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/post" component={Post}/>
            <Route path="/post/:topic/" component={PostDetails}/>
            <Route path="/profile" component={Profile}/>
           
            <Footer year="2021" month="Jan"/>
        </BrowserRouter>
    )
}

export default Routing;