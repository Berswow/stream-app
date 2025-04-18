import {configureStore} from "@reduxjs/toolkit";
import {tmdbApi} from "@/services/tmdb/tmdbApi";
import filterSlice from "@/redux/slices/filterSlice.ts";
import movieFilterSlice from "@/redux/slices/movieFilterSlice.ts";
import tvShowFilterSlice from "@/redux/slices/tvShowFilterSlice.ts";

export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        filter: filterSlice,
        movieFilter: movieFilterSlice,
        tvShowFilter: tvShowFilterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch