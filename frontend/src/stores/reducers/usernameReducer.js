const defaultStates = {
  username: "",
  password: "",
  challengesList: []
}

export default (state = defaultStates, action) => {
  switch (action.type) {
    case 'USER_NAME':
      return {
        ...state,
        ...action.payload.userData
      }
    default:
      return state
  }
}

