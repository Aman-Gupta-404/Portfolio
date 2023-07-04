import { configureStore } from "@reduxjs/toolkit";
import animationSlice from "./features/animationSlice";

export default configureStore({
  reducer: {
    animationState: animationSlice,
  },
});
