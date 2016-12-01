import { connect } from 'react-redux'

import Tree from './Tree'

const mapStateToProps = state => {
  return {
  tree: state.tree
}}

export default connect(mapStateToProps)(Tree)