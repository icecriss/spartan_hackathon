const defaultStates = {
  username: "",
  password: ""
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

