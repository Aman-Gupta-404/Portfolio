import { configureStore } from "@reduxjs/toolkit";
import animationSlice from "./features/animationSlice";
import modalSlics from "./features/modalSlics";
import navigationSlice from "./features/navigationSlice";

export default configureStore({
  reducer: {
    animationState: animationSlice,
    modalState: modalSlics,
    navigationState: navigationSlice,
  },
});
