import { useSelector } from "react-redux";
import { selectGenresFilter, selectOriginalLanguageFilter, selectReleaseDateFilter, selectSortFilter } from "@/redux/slices/filterSlice.ts";
import { useGetFilteredMoviesQuery, useGetFilteredTvShowsQuery } from "@/services/tmdb/filterApi.ts";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useInfiniteScroll } from "@/utils/hooks/useInfiniteScroll.ts";
import { Link } from "react-router-dom";
import {FilterMenuController} from "@/features/movie/FilterMenuController.tsx";
import { MOVIE_GENRES } from "@/constants/genres";
import {TV_GENRES} from "@/constants/genres.ts";

interface CardGridProps {
    genreId: number;
    contentType: 'movie' | 'tv'; // Добавляем contentType
}

export const CardGrid = ({ genreId, contentType }: CardGridProps) => {
    const sort_by = useSelector(selectSortFilter);
    const release_year = useSelector(selectReleaseDateFilter);
    const languages = useSelector(selectOriginalLanguageFilter);
    const genres = useSelector(selectGenresFilter);

    const [page, setPage] = useState(1);
    const [allItems, setAllItems] = useState<any[]>([]); // Массив для фильмов или сериалов
    const [hasFilterChanged, setHasFilterChanged] = useState(false);

    const queryParams = useMemo(() => {
        const mergedGenres = genres.includes(genreId) ? genres : [genreId, ...genres];
        return {
            sort_by,
            release_year,
            languages,
            genres: mergedGenres,
            page
        };
    }, [sort_by, release_year, languages, genres, genreId, page]);

    const { data, isLoading, isFetching, error } = contentType === 'tv'
        ? useGetFilteredTvShowsQuery(queryParams) // Запрос для сериалов
        : useGetFilteredMoviesQuery(queryParams); // Запрос для фильмов

    // Сброс фильмов/сериалов при изменении фильтров
    useEffect(() => {
        console.log("Filters changed, resetting movies/shows...");
        setPage(1);
        setAllItems([]); // Сброс данных
    }, [sort_by, release_year, languages, genres, genreId]);

    // Обновление allItems после запроса
    useEffect(() => {
        if (data) {
            console.log("Data received from API:", data);
            setAllItems(prev => {
                const combinedItems = [...prev, ...data];
                // Удаление дублирующихся элементов по id
                const uniqueItems = combinedItems.filter((item, index, self) =>
                    index === self.findIndex(i => i.id === item.id)
                );
                return hasFilterChanged ? data : uniqueItems;
            });
            setHasFilterChanged(false);
        }
    }, [data, hasFilterChanged]);

    const loadMore = useCallback(() => {
        if (!isFetching && !isLoading) {
            setPage(prev => prev + 1);
        }
    }, [isFetching, isLoading]);

    const triggerRef = useInfiniteScroll(loadMore);

    if (error) return <div>Ошибка загрузки</div>;

    return (
        <div className="flex flex-col gap-10">
            {contentType === 'movie' ? (
                <FilterMenuController baseGenreId={genreId} genres={MOVIE_GENRES} />
            ) : <FilterMenuController baseGenreId={genreId} genres={TV_GENRES} />}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {allItems.map((item: any, index: number) => (
                    <Link
                        key={`${item.id}-${index}`}
                        to={`/${contentType === 'tv' ? 'tv' : 'movies'}/${item.id}`}
                        className="flex flex-col items-center rounded-2xl p-5 justify-between gap-2"
                        style={{ backgroundColor: "var(--black-15)" }}
                    >
                        <div className="relative rounded-2xl overflow-hidden w-full">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={`Image ${item.original_title || item.original_name}`}
                                className="rounded-lg object-cover w-full"
                                style={{ height: "404px" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="w-full text-[16px] gap-2">
                            <div className="gap-0.5 rounded-xl p-3.5 bg-neutral-900 text-center">
                                <p>{item.original_title || item.original_name}</p>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Триггер для скролла */}
                <div ref={triggerRef} className="h-1 col-span-full" />
            </div>

            {(isLoading || isFetching) && <div className="text-center py-5">Загрузка...</div>}
        </div>
    );
};
