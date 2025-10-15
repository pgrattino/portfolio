import { configureStore } from "@reduxjs/toolkit";
import splashCursorReducer from "./features/splashCursorSlice";

export const store = configureStore({
    reducer: {
        splashCursor: splashCursorReducer
    },
});