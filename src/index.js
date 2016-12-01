import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/App'
import Tree from './components/Tree/Tree.container'
import Teams from './components/Teams/Teams.container'


import '../public/index.css'


ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Tree}/>
        <Route path="teams" component={Teams}/>
      </Route>
    </Router>,
  document.getElementById('root')
)
