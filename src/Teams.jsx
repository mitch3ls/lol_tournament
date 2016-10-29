import React, {Component} from 'react'

import * as firebase from 'firebase'

import './Teams.css'


class Teams extends Component {

  constructor() {
    super()

    this.state = {
      teams: 'Loading...'
    }
  }

  componentDidMount() {
    const teamsRef = firebase.database().ref().child('teams')

    teamsRef.on('value', snap => this.setState({
      teams: snap.val()
    }))
  }


  render() {
    return (
        <div>
          {this.state.teams}
        </div>
    );
  }
}

export default Teams