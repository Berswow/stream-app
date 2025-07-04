import {useSelector} from "react-redux";
import {
    selectGenresFilter,
    selectOriginalLanguageFilter,
    selectReleaseDateFilter,
    selectSortFilter
} from "@/redux/slices/filterSlice.ts";
import {useGetFilteredMoviesQuery, useGetFilteredTvShowsQuery} from "@/services/tmdb/filterApi.ts";
import {useEffect, useMemo, useState, useCallback} from "react";
import {useInfiniteScroll} from "@/shared/lib/hooks/useInfiniteScroll.ts";
import {Link} from "react-router-dom";
import {FilterMenuController} from "@/features/movieFilter/FilterMenuController.tsx";
import {MOVIE_GENRES} from "@/shared/constants/genres.ts";
import {TV_GENRES} from "@/shared/constants/genres.ts";

interface CardGridProps {
    genreId: number;
    contentType: 'movie' | 'tv';
}

export const CardGrid = ({genreId, contentType}: CardGridProps) => {
    const sort_by = useSelector(selectSortFilter);
    const release_year = useSelector(selectReleaseDateFilter);
    const languages = useSelector(selectOriginalLanguageFilter);
    const genres = useSelector(selectGenresFilter);

    const [page, setPage] = useState(1);
    const [allItems, setAllItems] = useState<any[]>([])
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


    // should be used another logic for these hooks :

    const {data, isLoading, isFetching, error} = contentType === 'tv'
        ? useGetFilteredTvShowsQuery(queryParams)
        : useGetFilteredMoviesQuery(queryParams)

    //

    useEffect(() => {
        setPage(1);
        setAllItems([]);
    }, [sort_by, release_year, languages, genres, genreId]);

    useEffect(() => {
        if (data) {
            setAllItems(prev => {
                const combinedItems = [...prev, ...data];

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
        <>
            <h1></h1>
            <div className="flex flex-col gap-10">
                {contentType === 'movie' ? (
                    <FilterMenuController baseGenreId={genreId} genres={MOVIE_GENRES}/>
                ) : <FilterMenuController baseGenreId={genreId} genres={TV_GENRES}/>}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
                    {allItems.map((item: any, index: number) => (
                        <Link
                            key={`${item.id}-${index}`}
                            to={`/${contentType === 'tv' ? 'tvshow' : 'movies'}/${item.id}`}
                            className="flex flex-col items-center rounded-2xl p-5 justify-between gap-2 hover:shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-500"
                            style={{backgroundColor: "var(--black-15)"}}
                        >
                            <div className="relative rounded-2xl overflow-hidden w-full">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt={`Image ${item.original_title || item.original_name}`}
                                    className="rounded-lg object-cover w-full"
                                    style={{height: "404px"}}
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                            </div>
                            <div className="w-full text-[16px] gap-2 ">
                                <div className="gap-0.5 rounded-xl p-3.5 bg-neutral-900 text-center">
                                    <p>{item.original_title || item.original_name}</p>
                                </div>
                            </div>
                        </Link>
                    ))}


                    <div ref={triggerRef} className="h-1 col-span-full"/>
                </div>

                {(isLoading || isFetching) && <div className="text-center py-5">Загрузка...</div>}
            </div>
        </>
    );
};
