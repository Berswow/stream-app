import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store.ts";

interface filterInterface {
    release_date: number[] | null;
    original_language: string;
    sort: string;

}

const initialState: filterInterface = {
    release_date: [2025],
    original_language: '',
    sort: 'popularity.desc'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setReleaseDate: (state, action: PayloadAction<number[]>) => {
            return {...state, release_date: action.payload}
        },
        setOriginalLanguage: (state, action: PayloadAction<string>) => {
            state.original_language = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
    },
})

export const {setSort, setOriginalLanguage, setReleaseDate} = filterSlice.actions

export const selectReleaseDateFilter = (state: RootState) => state.filter.release_date
export const selectOriginalLanguageFilter = (state: RootState) => state.filter.original_language
export const selectSortFilter = (state: RootState) => state.filter.sort


export default filterSlice.reducer