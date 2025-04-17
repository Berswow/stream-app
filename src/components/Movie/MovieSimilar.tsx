import {useGetMovieSimilarQuery} from "@/services/tmdb/moviesApi.ts";
import {MovieDetailed} from "@/Interface/Movie/MovieDetailInterface.ts";
import {useNavigate} from "react-router-dom";

type MovieSimilarProps = {
    movieId: number
}

export const MovieSimilar = ({movieId}: MovieSimilarProps) => {
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetMovieSimilarQuery(movieId)

    const movies = data?.slice(0, 6) ?? [];

    if (isLoading) return <div>Reviews downloading...</div>;
    if (error || !data) return <div>Ошибка загрузки данных</div>;


    return (
        <div className='flex flex-col rounded-xl p-12.5 gap-7.5' style={{backgroundColor: "var(--black-15)"}}>
            <h4 style={{ color: "var(--grey-60)" }}>Similar Movies</h4>
            <div className='flex'>
                {movies.map((movie: MovieDetailed) => (
                    <div key={movie.id} className='flex flex-col gap-2 items-center rounded-2xl cursor-pointer hover:bg-neutral-700 hover:text-white transition-all duration-300 p-3'
                    onClick={() => navigate(`/movies/${movie.id}`)}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="flex">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Image ${movie.original_title}`}
                                     className="rounded-lg object-cover" style={{width: '160px', height: '160px'}}/>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                        </div>
                        <div>
                            <div className="text-sm text-white truncate max-w-[102px] p-1 bg-neutral-700 rounded-xl">{movie.title}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};