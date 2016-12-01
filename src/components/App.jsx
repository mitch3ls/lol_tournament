import React, {Component} from 'react'


/*****************/
//initialize firebase
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC2fJ-SzDUrEdBReSTNb2v497IXU1DXibo",
  authDomain: "lol-website-d3cd6.firebaseapp.com",
  databaseURL: "https://lol-website-d3cd6.firebaseio.com",
  storageBucket: "lol-website-d3cd6.appspot.com",
  messagingSenderId: "139274943607"
}

firebase.initializeApp(config)

//create references
const teamsRef = firebase.database().ref('teams')
const treeRef = firebase.database().ref('tree')
/*****************/


/*****************/
//initialize redux
import {Provider} from 'react-redux'
import {updateTeamData, updateTreeData} from '../redux/actions'
import {createStore} from 'redux'
import reducer from '../redux/reducers'

let store = createStore(reducer)

//create listeners
teamsRef.once('value', snap => store.dispatch(updateTeamData(snap.val())))
treeRef.once('value', snap => store.dispatch(updateTreeData(snap.val())))
/*****************/


import '../styles/App.css'

import Header from './Header'
import Navigation from './Navigation'


class App extends Component {
  render() {
    return (
        <div className="App">
      <Header/>

      <Navigation/>

      <Provider store={store}>
       {this.props.children}
      </Provider>
    </div>
    )
  }
}

export default App
