const reducer = (state, action) => {
  switch (action.score) {
    case "Heads":
      return {
        ...state,
        headsScore: state.headsScore + 1,
      }
    case "Tails":
      return {
        ...state,
        tailsScore: state.tailsScore + 1,
      }
  }
}

export default reducer
