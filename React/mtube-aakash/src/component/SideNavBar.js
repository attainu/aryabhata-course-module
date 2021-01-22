import React from 'react';
import {Link} from "react-router-dom"

const SideNav = () => {
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/trending">Trending</Link></li>
            </ul>
        </div>
    )
}

export default SideNav;