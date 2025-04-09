import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";

export const moviesApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrendingMovies: builder.query({
            query: ({time_window = 'day', page = 1}) => ({
                url: `trending/movie/${time_window}`,
                params: {
                    page: page
                }
            })
        }),
        getUpcomingMovies: builder.query({
            query: (page: number = 1) => ({
                url: 'movie/upcoming',
                params: {
                    page: page
                }
            })
        }),
        getNowPlayingMovies: builder.query({
            query: (page: number = 1) => ({
                url: 'movie/now_playing',
                params: {
                    page: page
                }
            })
        })
    }),
    overrideExisting: false
})

export const {useGetTrendingMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery} = moviesApi