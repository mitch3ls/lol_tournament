import React, {Component} from 'react'

import * as firebase from 'firebase'

import './Teams.css'


class Teams extends Component {

  constructor() {
    super()

    this.state = {
      teams: [{name:'Loading'}]
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
        <div className="Teams">
          <ul className="Teams-List">
            {this.state.teams
                .map(team =>
                <li className="Teams-ListItem" style={{order: team.score}}>
                  <div className="Teams-TeamName">
                    {team.name}
                  </div>
                  <div className="Teams-TeamScore">
                    {team.score}
                  </div>
                </li>
            )}
          </ul>
        </div>
    );
  }
}

export default Teams