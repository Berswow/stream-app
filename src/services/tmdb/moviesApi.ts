import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {MovieInterface} from "@/Interface/Movie/MovieInterface.ts";
import {VideoInterface} from "@/Interface/VideoInterface.ts";
import {MovieDetailed} from "@/Interface/Movie/MovieDetailInterface.ts";
import {CastMember} from "@/Interface/Movie/MovieCastInerface.ts";
import {CrewMember} from "@/Interface/Movie/MovieCrewInterface.ts";
import {ExternalIds} from "@/Interface/Movie/ExternalIDInterface.ts";

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
        getMovieDetails: builder.query<MovieDetailed, string | number>({
            query: (id) => `/movie/${id}`,
        }),
        getMovieCast: builder.query<{
            cast: CastMember[];
            crew: {
                directors: CrewMember[];
                producers: CrewMember[];
            };
        }, string | number>({
            query: (id) => `/movie/${id}/credits`,
            transformResponse: (response: {
                cast: CastMember[];
                crew: CrewMember[];
            }) => {
                const directors = response.crew.filter(
                    (member) => member.job === 'Director'
                );

                const producers = response.crew.filter(
                    (member) => member.job === 'Producer'
                );

                return {
                    cast: response.cast,
                    crew: {
                        directors,
                        producers,
                    },
                };
            },
        }),
        getMovieExternalIds: builder.query<ExternalIds, number>({
            query: (movieId) => `/movie/${movieId}/external_ids`,
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
    useGetMovieDetailsQuery,
    useGetMovieCastQuery,
    useGetMovieExternalIdsQuery
} = moviesApi