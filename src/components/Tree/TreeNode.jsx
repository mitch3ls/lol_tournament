import React, {Component, PropTypes} from 'react'

import '../../styles/Tree/TreeNode.css'

import TeamNode from './TeamNode'

class TreeNode extends Component {
  render() {
    const tree = this.props.tree

    return (
        <div className="TreeNode">
          <TeamNode team={tree.team}/>

          { this.getSubTree(tree) }
        </div>
    )
  }

  getSubTree(tree) {
    if (tree.left && tree.right)
      return (<div>
        <svg width="100%">
          <line className="TreeNode-VerticalLine" x1="50%" y1="0" x2="50%" y2="150"/>

          <line className="TreeNode-HorizontalLine" x1="25%" y1="150" x2="75%" y2="150"/>
        </svg>


        <div className="TreeNode-SubTrees">

          <TreeNode tree={tree.left}/>

          <TreeNode tree={tree.right}/>

        </div>
      </div>)
  }
}


TreeNode.propTypes = {
  tree: PropTypes.object.isRequired
}

export default TreeNode