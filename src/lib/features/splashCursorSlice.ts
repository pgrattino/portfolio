import { createSlice } from "@reduxjs/toolkit";

export const splashCursorSlice = createSlice({
    name: "splashCursor",
    initialState: { isVisible: false },
    reducers: {
        showCursor: (state) => {
            state.isVisible = true;
        },
        hideCursor: (state) => {
            state.isVisible = false;
        }
    }
});

export const { showCursor, hideCursor } = splashCursorSlice.actions;

export default splashCursorSlice.reducer;
