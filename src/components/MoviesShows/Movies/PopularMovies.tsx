import { CategoryBlock } from "@/components/CategoryBlock.tsx";
import { MovieInterface } from "@/Interface/Movie/MovieBaseInterface.ts";
import {useGenreQueries} from "@/utils/hooks/useGenreQueries.ts";
import {useGetFilteredMoviesQuery} from "@/services/tmdb/filterApi.ts";
import {MOVIE_GENRES} from "@/constants/genres.ts";

const queries = MOVIE_GENRES.map((genre) => ({
    genre: genre.name,
    hook: () => useGetFilteredMoviesQuery({ genres: [genre.id] }),
}));


export const PopularMovies = () => {
    const { genreMap, isLoading, isError } = useGenreQueries<MovieInterface>(queries);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки</div>;

    return (
        <CategoryBlock<MovieInterface>
            title="Top Movies by Genre"
            genres={queries.map((q) => q.genre)}
            genreMap={genreMap}
            getId={(item) => item.id}
            getImage={(item) => `https://image.tmdb.org/t/p/w154${item.poster_path}`}
            getTitle={(item) => item.original_title}
        />
    );
};
