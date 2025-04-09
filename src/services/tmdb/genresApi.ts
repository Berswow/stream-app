// services/tmdb/genresApi.ts
import { tmdbApi } from './tmdbApi';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const genresApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovieGenres: builder.query({
            query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
        getTVGenres: builder.query({
            query: () => `genre/tv/list?api_key=${API_KEY}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetMovieGenresQuery, useGetTVGenresQuery } = genresApi;