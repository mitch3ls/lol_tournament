import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'


import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC2fJ-SzDUrEdBReSTNb2v497IXU1DXibo",
  authDomain: "lol-website-d3cd6.firebaseapp.com",
  databaseURL: "https://lol-website-d3cd6.firebaseio.com",
  storageBucket: "lol-website-d3cd6.appspot.com",
  messagingSenderId: "139274943607"

}
firebase.initializeApp(config)


import App from './App'
import Tree from './Tree'
import Teams from './Teams'

import './index.css'


ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Tree}/>
        <Route path="teams" component={Teams}/>
      </Route>
    </Router>,
  document.getElementById('root')
)
