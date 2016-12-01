
const initialState = {
  teams: [{name: 'loading'}],
  tree: {team: 'loading'}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEAM_DATA':
      return {...state, ...{teams: action.data}}
    case 'UPDATE_TREE_DATA':
      return {...state, ...{tree: action.data}}
    default:
      return state
  }
}