import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {MovieInterface} from "@/Interface/MovieInterface.ts";
import {VideoInterface} from "@/Interface/VideoInterface.ts";
import {buildMovieParams} from "@/utils/buildMovieParams.ts";

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
        getPopularActionMovies: builder.query<
            MovieInterface[],
            {
                sort_by?: string;
                release_years?: number[];
                languages?: string[];
                genres?: number[];
            }
        >({
            async queryFn(
                { sort_by = 'popularity.desc', release_years = [], languages = [], genres = [] },
                _queryApi,
                _extraOptions,
                fetchWithBQ
            ) {
                const buildParams = (year?: number, lang?: string) =>
                    buildMovieParams({
                        sort_by,
                        primary_release_year: year,
                        original_language: lang,
                        with_genres: genres.join(',') // <-- добавляем жанры
                    });

                if (!release_years.length && !languages.length) {
                    const result = await fetchWithBQ({
                        url: 'discover/movie',
                        params: buildParams()
                    });

                    if (result.error) return { error: result.error };

                    const movies = (result.data as TMDBResponse<MovieInterface>).results ?? [];
                    return { data: movies.filter(m => m.poster_path) };
                }

                const combinations =
                    release_years.length && languages.length
                        ? release_years.flatMap(year =>
                            languages.map(lang => ({ year, lang }))
                        )
                        : release_years.length
                            ? release_years.map(year => ({ year, lang: undefined }))
                            : languages.map(lang => ({ year: undefined, lang }));

                const responses = await Promise.all(
                    combinations.map(({ year, lang }) =>
                        fetchWithBQ({
                            url: 'discover/movie',
                            params: buildParams(year, lang)
                        })
                    )
                );

                const errorResponse = responses.find(res => res.error);
                if (errorResponse && errorResponse.error) {
                    return { error: errorResponse.error };
                }

                const allMovies = responses.flatMap(
                    res => (res.data as TMDBResponse<MovieInterface>).results ?? []
                );

                return { data: allMovies.filter(m => m.poster_path) };
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