import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {MovieInterface} from "@/Interface/Movie/MovieInterface.ts";
import {buildMovieParams} from "@/utils/buildMovieParams.ts";

interface TMDBResponse<T> {
    results: T[];
}

export const filterApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getFilteredMovies: builder.query<MovieInterface[], {
            sort_by?: string;
            release_year?: number | null;
            languages?: string[];
            genres?: number[];
            page?: number;
        }>({
            async queryFn({ sort_by = 'popularity.desc', release_year, languages = [], genres = [], page = 1 }, _queryApi, _extraOptions, fetchWithBQ) {
                const genreParam = genres.join(',');

                if (!languages.length) {
                    const params = buildMovieParams({
                        sort_by,
                        with_genres: genreParam,
                        primary_release_year: release_year ?? undefined,
                        page
                    });
                    const result = await fetchWithBQ({ url: 'discover/movie', params });
                    if (result.error) return { error: result.error };
                    const movies = (result.data as TMDBResponse<MovieInterface>).results ?? [];
                    return { data: movies.filter(m => m.poster_path) };
                }

                const responses = await Promise.all(
                    languages.map(lang =>
                        fetchWithBQ({
                            url: 'discover/movie',
                            params: buildMovieParams({
                                sort_by,
                                with_genres: genreParam,
                                original_language: lang,
                                primary_release_year: release_year ?? undefined,
                                page
                            })
                        })
                    )
                );

                const allMovies = responses.flatMap(
                    res => (res.data as TMDBResponse<MovieInterface>)?.results ?? []
                );

                return { data: allMovies.filter(m => m.poster_path) };
            }
        })
    }),
    overrideExisting: false
});

export const { useGetFilteredMoviesQuery
} = filterApi