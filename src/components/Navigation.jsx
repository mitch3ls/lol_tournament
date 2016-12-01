import React from 'react'
import {Link} from 'react-router'

import '../styles/Navigation.css'

const Navigation = () => (
    <nav className="Navigation">
        <ul className="Navigation-List">
            <li><Link className="Navigation-Link" to="/"> Tournament </Link></li>
            <li><Link className="Navigation-Link" to="/teams"> Teams </Link></li>
        </ul>
    </nav>
)

export default Navigation