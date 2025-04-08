import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/'
    }),
    endpoints: (builder) => ({
        getActionMovies: builder.query({
            query: () =>
                `discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&vote_count.gte=100`
        })
    })
})

export const { useGetActionMoviesQuery } = tmdbApi