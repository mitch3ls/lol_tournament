import React, {Component} from 'react';
import { Link } from 'react-router'

import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
        <nav className="Navigation">
            <ul className="Navigation-List">
                <li><Link className="Navigation-Link" to="/"> Tournament </Link></li>
                <li><Link className="Navigation-Link" to="/teams"> Teams </Link></li>
            </ul>
        </nav>
    );
  }
}

export default Navigation