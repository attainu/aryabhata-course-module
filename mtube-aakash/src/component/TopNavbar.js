import React from 'react';
import {Link} from 'react-router-dom'
const TopNav = () => {
    return(
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
            </button>
            <Link class="navbar-brand" to="/">MTube</Link>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login with G</a></li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default TopNav;