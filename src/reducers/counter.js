const initialState = {
  count: 0,
  clicked: 0,
  custAmount: 0
};



function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicked: state.clicked +1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicked: state.clicked +1
      };
      case 'CUSTOMAMOUNT':
        return {
          ...state,
          count: (state.count),
          custAmount: action.count
      };
      case 'CLICKCOUNT':
        return {
          ...state,
          clicked: (state.clicked = 0),
          count: (state.custAmount)
      };
    default:
      return state;
  }
}

export default counterReducer;