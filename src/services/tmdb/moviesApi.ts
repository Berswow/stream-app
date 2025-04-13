import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {MovieInterface} from "@/Interface/MovieInterface.ts";
import {VideoInterface} from "@/Interface/VideoInterface.ts";

interface TMDBResponse<T> {
    results: T[];
}

export const moviesApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrendingMovies: builder.query({
            query: ({time_window = 'day', page = 1}) => ({
                url: `trending/movie/${time_window}`,
                params: {
                    page
                }
            })
        }),
        getPopularMovies: builder.query({
            query: (page = 1) => ({
                url: `movie/popular`,
                params: {
                    page
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
                return response.results
            }
        }),
        getUpcomingMovies: builder.query({
            query: (page: number = 1) => ({
                url: 'movie/upcoming',
                params: {
                    page
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
                return response.results
            }
        }),
        getNowPlayingMovies: builder.query({
            query: (page: number = 1) => ({
                url: 'movie/now_playing',
                params: {
                    page
                }
            })
        }),
        getMovieTrailer: builder.query({
            query: (movieId: number) => ({
                url: `movie/${movieId}/videos`
            }),
            transformResponse: (response: TMDBResponse<VideoInterface>) => {
                const trailer = response.results.find(v => v.type === "Trailer" && v.site === "YouTube")
                return trailer?.key ?? null
            }
        }),
    }),
    overrideExisting: false
})

export const {
    useGetTrendingMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetMovieTrailerQuery
} = moviesApi