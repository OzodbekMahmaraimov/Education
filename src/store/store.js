import { createStore } from "redux";

const initialState = { checkout: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "checkout":
      return { checkout: action.checkout };
    default:
      return state; // Add this line to return the current state
  }
};

const store = createStore(reducer);

export default store;
