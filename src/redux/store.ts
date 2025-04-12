import {configureStore} from "@reduxjs/toolkit";
import {tmdbApi} from "@/services/tmdb/tmdbApi";
import filterSlice from "@/redux/slices/filterSlice.ts";

export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        filter: filterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch