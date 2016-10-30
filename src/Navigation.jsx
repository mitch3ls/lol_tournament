import React, {Component} from 'react';
import { Link } from 'react-router'

import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
        <nav>
            <ul className="Navigation">
                <li><Link to="/"> Tournament </Link></li>
                <li><Link to="/teams"> Teams </Link></li>
            </ul>
        </nav>
    );
  }
}

export default Navigation