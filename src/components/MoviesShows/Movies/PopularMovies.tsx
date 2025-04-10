import { CategoryBlock } from "@/components/CategoryBlock.tsx";
import { MovieInterface } from "@/Interface/MovieInterface";
import {
    useGetPopularActionMoviesQuery,
    useGetPopularAdventureMoviesQuery,
    useGetPopularComedyMoviesQuery,
    useGetPopularDramaMoviesQuery,
    useGetPopularHorrorMoviesQuery
} from "@/services/tmdb/moviesApi.ts";
import {useGenreQueries} from "@/utils/hooks/useGenreQueries.ts";

const queries = [
    { genre: "Action", hook: useGetPopularActionMoviesQuery },
    { genre: "Adventure", hook: useGetPopularAdventureMoviesQuery },
    { genre: "Comedy", hook: useGetPopularComedyMoviesQuery },
    { genre: "Drama", hook: useGetPopularDramaMoviesQuery },
    { genre: "Horror", hook: useGetPopularHorrorMoviesQuery }
];

export const PopularMovies = () => {
    const { genreMap, isLoading, isError } = useGenreQueries<MovieInterface>(queries);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки</div>;

    return (
        <CategoryBlock<MovieInterface>
            title="Top 10 Movies by Genre"
            genres={queries.map((q) => q.genre)}
            genreMap={genreMap}
            getId={(item) => item.id}
            getImage={(item) => `https://image.tmdb.org/t/p/w154${item.poster_path}`}
            getTitle={(item) => item.original_title}
        />
    );
};
