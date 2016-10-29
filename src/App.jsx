import React, { Component } from 'react'

import './App.css'

import Header from './Header'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header/>

        <Navigation/>

        {this.props.children}
      </div>
    )
  }
}

export default App
