import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/app/store.ts";

const initialState = {
    searchToggle: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setSearchToggle: (state, action: PayloadAction<boolean>) => {
            state.searchToggle = action.payload;
        }
    }
});

export const { setSearchToggle } = uiSlice.actions;

export const selectSearchToggle = (state: RootState) => state.uiFilter.searchToggle;

export default uiSlice.reducer;