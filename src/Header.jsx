import React, {Component} from 'react';

import banner from '../resources/banner.png'

import './Header.css'

class Header extends Component {
  render() {
    return (
        <header className="Header">
            <img className="Header-Banner"
                 src={banner}
                 alt="banner" width="50%"/>
            <h1 className="Header-Title">HTL3R Tournament</h1>
        </header>
    )
  }
}

export default Header