import {MovieInterface} from "@/Interface/MovieInterface.ts";
import {useSelector} from "react-redux";
import {
    selectGenresFilter,
    selectOriginalLanguageFilter,
    selectReleaseDateFilter,
    selectSortFilter
} from "@/redux/slices/filterSlice.ts";
import {useGetFilteredMoviesQuery} from "@/services/tmdb/filterApi.ts";
import {MovieFilterMenu} from "@/features/movie/MovieFilterMenu.tsx";




export const CardGrid = () => {
    const sort_by = useSelector(selectSortFilter)
    const release_years = useSelector(selectReleaseDateFilter)
    const languages = useSelector(selectOriginalLanguageFilter)
    const genres = useSelector(selectGenresFilter)


    const {data, isLoading, error} = useGetFilteredMoviesQuery({ sort_by, release_years, languages, genres })
    const movies = data ?? [];


    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;


    return (
        <div className='flex flex-col gap-10'>
            <MovieFilterMenu baseGenreId={28} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {movies.map((movie: MovieInterface) => (
                    <div
                        key={movie.id}
                        className="flex flex-col items-center rounded-2xl p-5 justify-between gap-2"
                        style={{backgroundColor: "var(--black-15)"}}
                    >
                        <div className="relative rounded-2xl overflow-hidden w-full">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`Image ${movie.original_title}`}
                                className="rounded-lg object-cover w-full"
                                style={{height: "404px"}}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                        </div>
                        <div className="w-full text-[16px] gap-2">
                            <div className="gap-0.5 rounded-xl p-3.5 bg-neutral-900 text-center">
                                <p>{movie.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
