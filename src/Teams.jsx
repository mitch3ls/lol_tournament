import React, {Component} from 'react'

import * as firebase from 'firebase'

import './Teams.css'


class Teams extends Component {

  constructor() {
    super()

    this.state = {
      teams: ["Team1", "Team2", "Team3"]
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
        <div className="ListWrapper">
          <ul className="List">
            {this.state.teams.map(team =>
              <li className="Team">{team}</li>
            )}
          </ul>
        </div>
    );
  }
}

export default Teams