import React, {PropTypes, Component} from 'react'

import '../../styles/Tree/TeamNode.css'

class TeamNode extends Component {
  render() {
    return (
        <div className="TeamNode">
          <span className="TeamNode-Name">
            {this.props.team}
          </span>
        </div>
    )
  }
}

TeamNode.propTypes = {
  team: PropTypes.string.isRequired
}

export default TeamNode