import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store.ts";

interface filterInterface {
    release_date: number | null;
    original_language: string[];
    genres: number[];
    sort: string;

}



const initialState: filterInterface = {
    release_date: 2025,
    original_language: ['en'],
    genres: [],
    sort: 'popularity.desc'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setReleaseDate: (state, action: PayloadAction<number | null>) => {
            state.release_date = action.payload;
        },
        setOriginalLanguage: (state, action: PayloadAction<string[]>) => {
            state.original_language = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        },
        setGenres: (state, action: PayloadAction<number[]>) => {
            state.genres = action.payload
        },
        setClearGenres: (state) => {
            state.genres = []; // очищаем массив жанров
        },
    },
})

export const {setSort, setOriginalLanguage, setReleaseDate, setGenres, setClearGenres} = filterSlice.actions

export const selectReleaseDateFilter = (state: RootState) => state.filter.release_date
export const selectOriginalLanguageFilter = (state: RootState) => state.filter.original_language
export const selectSortFilter = (state: RootState) => state.filter.sort
export const selectGenresFilter = (state: RootState) => state.filter.genres


export default filterSlice.reducer