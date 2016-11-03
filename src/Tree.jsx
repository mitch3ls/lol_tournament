import React, {Component} from 'react';

import * as firebase from 'firebase'

import './Tree.css'

class Tree extends Component {

  render() {
    return (
        <div className="Tree">
          <TreeNode teamId="0">

            <TreeNode teamId="0">
              <TeamNode teamId="0"/>
              <TeamNode teamId="1"/>
            </TreeNode>

            <TreeNode teamId="3">
              <TeamNode teamId="2"/>
              <TeamNode teamId="3"/>
            </TreeNode>

          </TreeNode>
        </div>
    )
  }
}

export default Tree

class TreeNode extends Component {

  render() {
    return (
        <div className="TreeNode">
          <TeamNode teamId={this.props.teamId}/>

          <svg width="100%">
            <line className="TreeNode-VerticalLine" x1="50%" y1="0" x2="50%" y2="150"/>

            <line className="TreeNode-HorizontalLine" x1="25%" y1="150" x2="75%" y2="150"/>
          </svg>

          <div className="TreeNode-SubTrees">
            {this.props.children}
          </div>
        </div>
    )
  }
}

class TeamNode extends Component {

  constructor() {
    super()
    this.state = {
      team: {name: 'Team'}
    }
  }

  componentDidMount() {
    const teamRef = firebase.database().ref().child('teams').child(this.props.teamId)

    teamRef.on('value', team => this.setState({
          team: team.val()
        })
    )
  }

  render() {
    return (
        <div className="TeamNode">
          <span className="TeamNode-Name">
            {this.state.team.name}
          </span>
        </div>
    )
  }
}
