import { createSlice } from "@reduxjs/toolkit";

export const navigationState = createSlice({
  name: "navigation",
  initialState: {
    navDisplay: false,
  },
  reducers: {
    showNav: (state, action) => {
      state = {
        navDisplay: true,
      };
      //   state.transitionLoaderState = true;
      return state;
    },
    hideNav: (state) => {
      state = {
        navDisplay: false,
        message: "",
      };
      //   state.transitionLoaderState = true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNav, hideNav } = navigationState.actions;

export default navigationState.reducer;
