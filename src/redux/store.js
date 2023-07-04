import { configureStore } from "@reduxjs/toolkit";
import animationSlice from "./features/animationSlice";
import modalSlics from "./features/modalSlics";

export default configureStore({
  reducer: {
    animationState: animationSlice,
    modalState: modalSlics,
  },
});
