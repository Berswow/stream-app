import {configureStore} from "@reduxjs/toolkit";
import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import filterSlice from "@/redux/slices/filterSlice.ts";
import movieFilterSlice from "@/features/movieFilter/movieFilterSlice.ts";
import tvShowFilterSlice from "@/features/tvShowFilter/tvShowFilterSlice.ts";
import uiSlice from "@/redux/slices/uiSlice.ts";

export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        filter: filterSlice,
        movieFilter: movieFilterSlice,
        tvShowFilter: tvShowFilterSlice,
        uiFilter: uiSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch