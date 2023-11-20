import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./SavedSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    saved: SavedReducer,
    user: userReducer,
  },
});

export default appStore;
