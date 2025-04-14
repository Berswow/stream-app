import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {MovieInterface} from "@/Interface/MovieInterface.ts";
import {buildMovieParams} from "@/utils/buildMovieParams.ts";

interface TMDBResponse<T> {
    results: T[];
}

export const moviesApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getFilteredMovies: builder.query<
            MovieInterface[],
            {
                sort_by?: string;
                release_years?: number[];
                languages?: string[];
                genres?: number[];
                page?: number;
            }
        >({
            async queryFn(
                {
                    sort_by = 'popularity.desc',
                    release_years = [],
                    languages = [],
                    genres = [],
                    page = 1
                },
                _queryApi,
                _extraOptions,
                fetchWithBQ
            ) {
                const buildParams = (year?: number, lang?: string) =>
                    buildMovieParams({
                        sort_by,
                        primary_release_year: year,
                        original_language: lang,
                        with_genres: genres.join(','),
                        page
                    });

                // Простой случай: без комбинаций языков/лет
                if (!release_years.length && !languages.length) {
                    const result = await fetchWithBQ({
                        url: 'discover/movie',
                        params: buildParams()
                    });

                    if (result.error) return { error: result.error };

                    const movies = (result.data as TMDBResponse<MovieInterface>).results ?? [];
                    return { data: movies.filter(m => m.poster_path) };
                }

                // Комбинированный случай
                const years = release_years.length ? release_years : [undefined];
                const langs = languages.length ? languages : [undefined];

                const combinations = years.flatMap(year =>
                    langs.map(lang => ({ year, lang }))
                );

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

    }),
    overrideExisting: false
})

export const { useGetFilteredMoviesQuery
} = moviesApi