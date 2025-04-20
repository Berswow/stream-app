import { CategoryBlock } from "@/entities/movie/CategoryBlock.tsx";
import { TvShowInterface } from "@/shared/interfaces/Show/TvShowBaseInterface.ts";
import { useGenreQueries } from "@/shared/lib/hooks/useGenreQueries.ts";
import { useGetFilteredTvShowsQuery } from "@/services/tmdb/filterApi.ts";
import { TV_GENRES } from "@/shared/constants/genres.ts";

const queries = TV_GENRES.map((genre) => ({
    genre: genre.name,
    hook: () => useGetFilteredTvShowsQuery({ genres: [genre.id] }), // используем запросы для сериалов
}));

export const PopularShows = () => {
    const { genreMap, isLoading, isError } = useGenreQueries<TvShowInterface>(queries);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки</div>;

    return (
        <article>
            <CategoryBlock<TvShowInterface>
                title="Top Shows by Genre"
                genres={queries.map((q) => q.genre)}
                genreMap={genreMap}
                getId={(item) => item.id}
                getImage={(item) => `https://image.tmdb.org/t/p/w154${item.poster_path}`}
                getTitle={(item) => item.original_name}
                contentType="tv"  // Явно указали тип контента (сериалы)
            />
        </article>
    );
};
