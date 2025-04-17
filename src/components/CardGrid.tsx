import { MovieInterface } from "@/Interface/Movie/MovieInterface.ts";
import { useSelector } from "react-redux";
import {
    selectGenresFilter,
    selectOriginalLanguageFilter,
    selectReleaseDateFilter,
    selectSortFilter
} from "@/redux/slices/filterSlice.ts";
import { useGetFilteredMoviesQuery } from "@/services/tmdb/filterApi.ts";
import { MovieFilterMenu } from "@/features/movie/MovieFilterMenu.tsx";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useInfiniteScroll } from "@/utils/hooks/useInfiniteScroll.ts";
import {Link} from "react-router-dom";

interface CardGridProps {
    genreId: number;
}

export const CardGrid = ({ genreId }: CardGridProps) => {
    const sort_by = useSelector(selectSortFilter);
    const release_year = useSelector(selectReleaseDateFilter);
    const languages = useSelector(selectOriginalLanguageFilter);
    const genres = useSelector(selectGenresFilter);

    const [page, setPage] = useState(1);
    const [allMovies, setAllMovies] = useState<MovieInterface[]>([]);

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

    useEffect(() => {
        console.log("Query Params", queryParams);
    }, [queryParams]);

    const { data, isLoading, isFetching, error } = useGetFilteredMoviesQuery(queryParams);

    // добавляем новые фильмы к общему списку
    useEffect(() => {
        if (data) {
            setAllMovies(prev => [...prev, ...data]);
        }
    }, [data]);

    // сбрасываем фильмы при изменении фильтров
    useEffect(() => {
        setPage(1);
        setAllMovies([]);
    }, [sort_by, release_year, languages, genres]);

    const loadMore = useCallback(() => {
        if (!isFetching) {
            setPage(prev => prev + 1);
        }
    }, [isFetching]);

    const triggerRef = useInfiniteScroll(loadMore);

    if (error) return <div>Ошибка загрузки</div>;

    return (
        <div className="flex flex-col gap-10">
            <MovieFilterMenu baseGenreId={genreId} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {allMovies.map((movie: MovieInterface, index: number) => (
                    <Link
                        key={`${movie.id}-${index}`}
                        to={`/movies/${movie.id}`}
                        className="flex flex-col items-center rounded-2xl p-5 justify-between gap-2"
                        style={{ backgroundColor: "var(--black-15)" }}
                    >
                        <div className="relative rounded-2xl overflow-hidden w-full">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`Image ${movie.original_title}`}
                                className="rounded-lg object-cover w-full"
                                style={{ height: "404px" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="w-full text-[16px] gap-2">
                            <div className="gap-0.5 rounded-xl p-3.5 bg-neutral-900 text-center">
                                <p>{movie.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Триггер для скролла */}
                <div ref={triggerRef} className="h-1 col-span-full" />
            </div>

            {isLoading && <div>Загрузка...</div>}
        </div>
    );
};
