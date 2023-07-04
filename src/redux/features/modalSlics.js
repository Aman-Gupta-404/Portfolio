import { createSlice } from "@reduxjs/toolkit";

export const animationState = createSlice({
  name: "modal",
  initialState: {
    show: false,
    message: "",
  },
  reducers: {
    showModal: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      console.log("getting here boss");
      state = {
        show: true,
        message: action.payload,
      };
      //   state.transitionLoaderState = true;
      return state;
    },
    hideModal: (state) => {
      state = {
        show: false,
        message: "",
      };
      //   state.transitionLoaderState = true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = animationState.actions;

export default animationState.reducer;
