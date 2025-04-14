import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {MovieInterface} from "@/Interface/MovieInterface.ts";
import {buildMovieParams} from "@/utils/buildMovieParams.ts";

interface TMDBResponse<T> {
    results: T[];
}

export const moviesApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getFilteredMovies: builder.query<MovieInterface[], {
            sort_by?: string;
            release_years?: number[];
            languages?: string[];
            genres?: number[];
            page?: number;
        }>({
            async queryFn({ sort_by = 'popularity.desc', release_years = [], languages = [], genres = [], page = 1 }, _queryApi, _extraOptions, fetchWithBQ) {
                // Если нет фильтров по языкам и годам — просто отправляем один запрос
                if (!release_years.length && !languages.length) {
                    const params = buildMovieParams({ sort_by, with_genres: genres.join(','), page });
                    const result = await fetchWithBQ({ url: 'discover/movie', params });

                    if (result.error) return { error: result.error };

                    const movies = (result.data as TMDBResponse<MovieInterface>).results ?? [];
                    return { data: movies.filter(m => m.poster_path) };
                }

                // Если есть комбинированные фильтры, делаем запросы по очереди
                const responses = await Promise.all(
                    languages.map(lang =>
                        fetchWithBQ({
                            url: 'discover/movie',
                            params: buildMovieParams({ sort_by, with_genres: genres.join(','), original_language: lang, page })
                        })
                    )
                );

                const allMovies = responses.flatMap(
                    res => (res.data as TMDBResponse<MovieInterface>).results ?? []
                );

                return { data: allMovies.filter(m => m.poster_path) };
            }
        }),
    }),
    overrideExisting: false
});

export const { useGetFilteredMoviesQuery
} = moviesApi