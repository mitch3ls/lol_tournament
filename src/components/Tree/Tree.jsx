import React, {PropTypes, Component} from 'react';

import TreeNode from './TreeNode'

class Tree extends Component {
  render() {
    return (
        <div width="100%">
          <TreeNode tree={ this.props.tree } />
        </div>
    )
  }
}

Tree.propTypes = {
  tree: PropTypes.object.isRequired
}

export default Tree




