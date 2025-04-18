import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    release_date: number | null;
    original_language: string[];
    genres: number[];
    sort: string;
}

const initialState: FilterState = {
    genres: [],
    original_language: [],
    release_date: null,
    sort: "popularity.desc"
};

export const createFilterSlice = (sliceName: string) => {
    return createSlice({
        name: sliceName,
        initialState,
        reducers: {
            setGenres: (state, action: PayloadAction<number[]>) => {
                state.genres = action.payload;
            },
            setOriginalLanguage: (state, action: PayloadAction<string[]>) => {
                state.original_language = action.payload;
            },
            setReleaseDate: (state, action: PayloadAction<number | null>) => {
                state.release_date = action.payload;
            },
            setSort: (state, action: PayloadAction<string>) => {
                state.sort = action.payload;
            }
        }
    });
};

export const createFilterSelectors = (sliceName: keyof RootState) => ({
    selectGenres: (state: RootState) => (state[sliceName] as FilterState).genres,
    selectOriginalLanguage: (state: RootState) => (state[sliceName] as FilterState).original_language,
    selectReleaseDate: (state: RootState) => (state[sliceName] as FilterState).release_date,
    selectSort: (state: RootState) => (state[sliceName] as FilterState).sort
});