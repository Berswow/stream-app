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
        getPopularActionMovies: builder.query<MovieInterface[], { sort_by?: string, release_date?: string } >({
            query: ({ sort_by = 'popularity.desc', release_date = '' }) => ({
                url: 'discover/movie',
                params: {
                    with_genres: 28,
                    sort_by,
                    release_date,
                    certification_country: 'US',
                    language: 'en-US',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
               return  response.results.filter(movie => movie.poster_path)
            }
        }),
        getPopularAdventureMovies: builder.query<MovieInterface[], void>({
            query: () => ({
                url: 'discover/movie',
                params: {
                    with_genres: 12,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
                return response.results
            }
        }),
        getPopularComedyMovies: builder.query<MovieInterface[], void>({
            query: () => ({
                url: 'discover/movie',
                params: {
                    with_genres: 35,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
                return response.results
            }
        }),
        getPopularDramaMovies: builder.query<MovieInterface[], void>({
            query: () => ({
                url: 'discover/movie',
                params: {
                    with_genres: 18,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
                return response.results
            }
        }),
        getPopularHorrorMovies: builder.query<MovieInterface[], void>({
            query: () => ({
                url: 'discover/movie',
                params: {
                    with_genres: 27,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<MovieInterface>) => {
                return response.results
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
    useGetMovieTrailerQuery,
    useGetPopularActionMoviesQuery,
    useGetPopularAdventureMoviesQuery,
    useGetPopularComedyMoviesQuery,
    useGetPopularDramaMoviesQuery,
    useGetPopularHorrorMoviesQuery
} = moviesApi