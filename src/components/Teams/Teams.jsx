import React, {PropTypes, Component} from 'react'

import '../../styles/Teams.css'


class Teams extends Component {
  render() {
    return (
        <div className="Teams">
          <ul className="Teams-List">
            {this.props.teams.map(team =>
                <li className="Teams-ListItem" key={team.id} style={{order: team.score}}>
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
    )
  }
}

Teams.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Teams