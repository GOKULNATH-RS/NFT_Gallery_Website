import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./SavedSlice";

const appStore = configureStore({
    reducer: {
        saved: SavedReducer,
    },
})

export default appStore;