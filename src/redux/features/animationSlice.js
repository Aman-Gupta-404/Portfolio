import { createSlice } from "@reduxjs/toolkit";

export const animationState = createSlice({
  name: "animation",
  initialState: {
    transitionLoaderState: false,
    pageValue: "",
  },
  reducers: {
    setTransitionTrue: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      console.log("getting here boss");
      state = {
        transitionLoaderState: true,
        pageValue: action.payload,
      };
      //   state.transitionLoaderState = true;
      return state;
    },
    setTransitionFalse: (state) => {
      state = {
        transitionLoaderState: false,
        pageValue: "",
      };
      //   state.transitionLoaderState = true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransitionTrue, setTransitionFalse } = animationState.actions;

export default animationState.reducer;
