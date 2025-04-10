import {CategoryBlock} from "@/components/CategoryBlock.tsx";
import {
    useGetPopularActionAdventureTVQuery,
    useGetPopularAnimationTVQuery,
    useGetPopularComedyTVQuery, useGetPopularDramaTVQuery, useGetPopularFamilyTVQuery
} from "@/services/tmdb/tvApi.ts";
import {ShowInterface} from "@/Interface/ShowInterface.ts";
import {useGenreQueries} from "@/utils/hooks/useGenreQueries.ts";

const queries = [
    { genre: "Action & Adventure", hook: useGetPopularActionAdventureTVQuery },
    { genre: "Animation", hook: useGetPopularAnimationTVQuery },
    { genre: "Comedy", hook: useGetPopularComedyTVQuery },
    { genre: "Drama", hook: useGetPopularDramaTVQuery },
    { genre: "Family", hook: useGetPopularFamilyTVQuery }
];

export const PopularShows = () => {
    const { genreMap, isLoading, isError } = useGenreQueries<ShowInterface>(queries);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки</div>;

    return (
        <article>
            <CategoryBlock<ShowInterface>
                title="Top 10 TVs by Genre"
                genres={queries.map((q) => q.genre)}
                genreMap={genreMap}
                getId={(item) => item.id}
                getImage={(item) => `https://image.tmdb.org/t/p/w154${item.poster_path}`}
                getTitle={(item) => item.original_name}
            />
        </article>
    );
};
