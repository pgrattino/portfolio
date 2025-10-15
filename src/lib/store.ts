import { configureStore } from "@reduxjs/toolkit";
import splashCursorReducer from "./features/splashCursorSlice";

export const store = configureStore({
    reducer: {
        splashCursor: splashCursorReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
