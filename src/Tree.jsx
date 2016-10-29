import React, {Component} from 'react';

import './Tree.css'

class Tree extends Component {
  render() {
    return (
        <div>
          <TreeNode>
            <TreeNode />
            <TreeNode />
          </TreeNode>
        </div>
    );
  }
}

export default Tree

class TreeNode extends Component {
  render() {
    return (
        <div>
          <svg width="100%">
            <line x1="50%" y1="0" x2="50%" y2="150"/>

            <div>
              {this.props.children}
            </div>
          </svg>
        </div>
    )
  }
}