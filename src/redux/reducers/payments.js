const initialState = {
  payments: null,
};

export default function TestReducer(state = initialState, action) {
  switch (action.type) {
    case "DO_THIS":
      return {
        ...state,
        payments: action.payload,
      };
    default:
      return state;
  }
}
